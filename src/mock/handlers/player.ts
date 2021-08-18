import { rest } from 'msw'

const prefix = import.meta.env.VITE_REQUEST_PREFIX

export default [
  rest.get(`${prefix}/player/list`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 0,
        msg: 'ok',
        data: {
          list: [
            {
              uid: 206158430228,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2175_S1',
              token: 'wod0-2175_S1',
              createTime: '2021-08-04T01:58:59.163Z',
            },
            {
              uid: 206158430420,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2183_S1',
              token: 'wod0-2183_S1',
              createTime: '2021-08-04T01:58:59.254Z',
            },
            {
              uid: 206158430611,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2189_S1',
              token: 'wod0-2189_S1',
              createTime: '2021-08-04T01:58:59.273Z',
            },
            {
              uid: 206158430993,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2323_S1',
              token: 'wod0-2323_S1',
              createTime: '2021-08-04T01:58:59.334Z',
            },
            {
              uid: 206158430802,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2309_S1',
              token: 'wod0-2309_S1',
              createTime: '2021-08-04T01:58:59.303Z',
            },
            {
              uid: 206158431375,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2513_S1',
              token: 'wod0-2513_S1',
              createTime: '2021-08-04T01:58:59.384Z',
            },
            {
              uid: 206158431184,
              kingdomId: 'k1',
              fpid: 0,
              name: 'wod0-2503_S1',
              token: 'wod0-2503_S1',
              createTime: '2021-08-04T01:58:59.363Z',
            },
          ],
          totalPage: 2,
          currentPage: 1,
        },
      }),
    )
  }),
]
