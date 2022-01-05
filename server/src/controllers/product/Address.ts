import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import axios from 'axios';
import { posts } from '../../entity/posts';

export = async (req: Request, res: Response) => {
  const address = req.params.addressId;
  const coordinates = await axios
    .get(`https://dapi.kakao.com/v2/local/search/address.json`, {
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAOREST_API}`,
      },
      params: {
        query: address,
      },
    })
    .then((res) => {
      return res.data.documents[0];
    });
  if (coordinates === undefined) {
    res.status(400).json({ message: 'Bad Request' });
  } else {
    const entityManager = getManager();
    const distance = 2;
    const nearbyProduct = await entityManager.query(`
    SELECT id, (
      6371 * acos (
      cos ( radians(${Number(coordinates.y)}) )
      * cos( radians( latitude ) )
      * cos( radians( longitude ) - radians(${Number(coordinates.x)}) )
      + sin ( radians(${Number(coordinates.y)}) )
      * sin( radians( latitude ) )
      )
    ) AS distance
    FROM posts
    HAVING distance < ${distance}
    ORDER BY distance`);
    console.log(nearbyProduct);
    res.send('address');
  }
};
