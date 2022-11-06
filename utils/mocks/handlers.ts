// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          categories: [
            {
              idCategory: '1',
              strCategory: 'Beef',
              strCategoryThumb:
                'https://www.themealdb.com/images/category/beef.png',
              strCategoryDescription:
                'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
            },
          ],
        })
      )
    }
  ),
]
