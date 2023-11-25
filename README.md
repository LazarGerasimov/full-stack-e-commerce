Two projects built with Next 13 - Fully Responsive Front End Store & Admin Dashboard. Both deployed on Vercel. 

Frond end store: https://e-commerce-front-end-store.vercel.app/

Admin dashboard: https://e-commerce-admin-ochre.vercel.app/97675bc8-2e52-48ca-a2fd-8d533a9814c8

The admin dashboard homepage shows an overview of: 
- Total revenue
- Total sales
- Total products in stock
- Revenue per month

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/c99f5716-8165-4c98-8834-1117ce1b6d57)

The dashboard supports creation of: 
- billboards
- categories (relation with billboards)
- sizes and colours
- products (relation to categories, sizes, colours)
- orders are populated automatically based on the Stripe client purchases on the frontend store
- each section supports name search 

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/c136dc70-837f-45e9-a41c-c13760996038)

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/da269e2b-c8df-48ed-b390-ff80fe506a2c)

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/cb723a60-ad2f-40ab-9dfc-7716186102ec)

All sections have the relevant API calls attached on the bottom of the page: 

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/6e9c8b13-9c8b-4c29-9776-9fe568960e21)

The admin dashboard supports light/dark/system theme. The switch button is located next to the user button in the top right corner. 


The front end store supports the following functionalities: 
- browse items by categories selecting them from the navbar on the top
- search through featured items from the store homepage
- open item previews in a separate modal
- open product details
- add items to cart from several places where the shopping cart icon appears
- shopping cart removal
- shopping cart total price calculation
- Stripe payment system (sales reflected in the admin dashboard)
- sort items by size or colour

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/216a8284-8973-4a11-a077-35141bbe14a3)

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/9f91ff39-6f27-4ea3-ab30-8c687c91df7a)

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/0607e5cb-61ac-4e56-9b58-a857021dcda5)

![image](https://github.com/LazarGerasimov/full-stack-e-commerce/assets/99253584/fe69e382-8c1b-4922-81f3-fb631145917f)


Tech stack for both projects: 
- shadcn for building clean UI 
- Clerk for authentication 
- Zustand for state management 
- Zod for typescript schema form validation 
- React Hook Form for easy form validation
- Prismadb for ORM 
- Planetscale for serverless MySQL database
- Axios for simpler REST API consumption
- React Hot Toast for error handing and notifications
- Cloudinary for image storage plus Next-Cloudinary for high performance image delivery
- Date-fns for date format manipulation
- Headless UI for the front end store 
- Stripe for payments
- Recharts for dashboard sales/revenue overview





