<template>
  <FAQPanel :items="items"></FAQPanel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "How do I create an account?",
        text: "To create an account, click on the 'Sign Up' button on the homepage. Fill in your details including your email address and password. Once you have completed the registration, you will receive a confirmation email.",
      },
      {
        title: "How do I submit a teaching strategy?",
        text: "To submit a teaching strategy, log into your account and navigate to the 'Submit Strategy' section. Fill in the required fields such as the strategy title, description, and any supporting materials. Once you are done, click 'Submit'.",
      },
      {
        title: "Can I edit or delete my submitted strategies?",
        text: "Yes, you can edit or delete your submitted strategies. Go to the 'My Strategies' section, select the strategy you wish to edit or delete, and click the corresponding button. Make the necessary changes or confirm the deletion.",
      },
      {
        title: "How do I search for strategies?",
        text: "To search for strategies, use the search bar at the top of the homepage. You can filter results by subject, grade level, or keywords to find the strategies that best fit your needs.",
      },
      {
        title: "How do I save my favorite strategies?",
        text: "To save your favorite strategies, click on the 'Save' button located next to each strategy. You can view all your saved strategies in the 'Favorites' section of your account.",
      },
      {
        title: "How can I provide feedback on a strategy?",
        text: "To provide feedback on a strategy, go to the strategy's page and scroll down to the comments section. You can leave your feedback or suggestions there. Your input helps improve the quality of strategies shared within the community.",
      },
      {
        title: "Is there a mobile version of the app?",
        text: "Yes, our app is available on both iOS and Android. You can download it from the App Store or Google Play. The mobile app includes all the features of the web version, allowing you to submit and browse strategies on the go.",
      },
      {
        title: "How do I contact support?",
        text: "If you need assistance, you can contact our support team via email at support@teachingapp.com or by using the 'Contact Us' form on the app. We are available Monday to Friday, 9 AM to 6 PM.",
      },
    ],
  }),
};
</script>
