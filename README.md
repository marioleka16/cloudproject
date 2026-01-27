This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


///////////////////////////////////////////////////////////////////////////
IronPulse Fitness - Verification Walkthrough
1. Project Setup
The project has been initialized with Next.js and Tailwind CSS. All dependencies should be installed.

If you need to restart the server:

pnpm dev
Open http://localhost:3000 in your browser.

2. Verification Steps
Visual Inspection
Hero Section: Confirm the "Forge Your Legacy" text and Neon Green accents match the design.
Navigation: Scroll down to see the transparent header turn into a solid background (Note: Currently fixed background for simplicity, check implementation).
Sections: Verify "Why IronPulse" and "Our Classes" grids are aligned.
Functionality Test (Goals & Contact)
Scroll to the Community Goals section. You should see default mock goals (Mario, Luigi).
Scroll to the Join the Corps (Contact) section.
Fill out the form:
Name: Test User
Email: 
test@test.com
Goal: Lift 200kg
Click Send Message.
Wait for the alert "Message Sent! Goal Recorded.".
Scroll back up to Community Goals. The new goal ("Test User: Lift 200kg") should appear in the list.
NOTE

The application is currently using In-Memory Mock Data for the API. Providing AWS Credentials and uncommenting the code in 
src/app/api/goals/route.ts
 will enable DynamoDB integration.

3. Deployment to AWS
To deploy this application and connect the real database:

Set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in .env.local.
Create a DynamoDB table named IronPulseGoals.
Deploy using Vercel or your preferred specific AWS hosting method (e.g., Amplify).