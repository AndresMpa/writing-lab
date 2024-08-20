<template>
  <FAQPanel :items="items"></FAQPanel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "How do I sign up?",
        text: `Select the Sign up button at the top right corner, and then fill in the fields required. Click on “Next” to choose the courses that you are teaching now, and those you have taught before. Then, click on “Next”. Open the usage Terms and Conditions, and click on “I understand”. Finally, click on the box to agree to site terms and conditions, and select “Create Account”.`,
      },
      {
        title: "How do I sign in?",
        text: `Select the Sign up button at the top right corner, and then complete the fields with your Nickname, email address, and password. Finally, click on “Log in”.`,
      },
      {
        title: "How can I access the “Collaborate” module?",
        text: `Once you have signed in, you can access the module by selecting “Collaborate” from the left-hand side of your home screen.`,
      },
      {
        title: "How can I access the “Get insights” module?",
        text: `You can do this in different ways. If you are accessing from your home page, you can click on the “Collaborate” option located on the top right corner of the screen, and then on “Get insights”. If you are located in the “Collaborate” module, you will be able to see the “Get insights” image and access it by clicking on it. If you are in a different module and would like to switch to the “Get insights” module, click on the three horizontal lines from the top left corner of the screen, and then on “Get insights” from the drop-down menu.`,
      },
      {
        title: "How can I access the “Meaningful experiences” module?",
        text: `You can do this in different ways. If you are accessing from your home page, you can click on the “Collaborate” option located on the top right corner of the screen, and then on “Meaningful experiences”. If you are located in the “Collaborate” module, you will be able to see the “Meaningful experiences” image and access it by clicking on it. If you are in a different module and would like to switch to the “Meaningful experiences” module, click on the three horizontal lines from the top left corner of the screen, and then on “Meaningful experiences” from the drop-down menu.`,
      },
      {
        title: "How can I access the “I wonder how I could” module?",
        text: `You can do this in different ways. If you are accessing from your home page, you can click on the “Collaborate” option located on the top right corner of the screen, and then on “I wonder how I could”. If you are located in the “Collaborate” module, you will be able to see the “I wonder how I could” image and access it by clicking on it. If you are in a different module and would like to switch to the “I wonder how I could” module, click on the three horizontal lines from the top left corner of the screen, and then on “I wonder how I could” from the drop-down menu.`,
      },
      {
        title: "How can I contribute to the “I wonder how I could” module?",
        text: `<!Text will be ready when I have access to a post created by another profile.>`,
      },
      {
        title: "How can I access the “Let's work together” module?",
        text: `You can do this in different ways. If you are accessing from your home page, you can click on the “Collaborate” option located on the top right corner of the screen, and then on “Let’s work together”. If you are located in the “Collaborate” module, you will be able to see the “Let’s work together” image and access it by clicking on it. If you are in a different module and would like to switch to the “Let’s work together” module, click on the three horizontal lines from the top left corner of the screen, and then on “Let’s work together” from the drop-down menu.`,
      },
      {
        title: "How do I create and share a post?",
        text: `From the “Collaborate” module or any other module within it, click on the three horizontal lines from the top left corner of the screen, and then on “Write a new post” from the drop-down menu. Select your post type by clicking on the first icon of the right-hand panel of the screen, and then select the course with the second icon. Use the icons from the left-hand panel to leave the screen, delete the draft, lock the post to preview it, or save a draft of your post. When you are ready, select the last icon on the right-hand panel and then click on “Publish”.`,
      },
      {
        title: "How can I invite a colleague to collaborate with me?",
        text: `Access the “Let's work together module”. After that, choose the colleague you would like to work with. Then, scroll down and click on “Save”, and then on “Next”. Select the course you want your collaboration to be about, and then click on “Save” and “Next”. Then, complete the fields to start your collaboration. Don’t forget to choose the type of post, and to publish it.`,
      },
      {
        title:
          "How do I open a discussion through the “I wonder how I could” module?",
        text: `Once you are in the module, use the panel located at the right-hand side of the screen to write a title for your question, and then a detailed description of it. Then, select the due date, finally click on “Publish”.`,
      },
      {
        title: "How can I edit or delete a post?",
        text: `First, access your post. Then, select the icon located at the top right corner of your screen. You will be able to see the delete and edit options there.`,
      },
      {
        title: "Can I filter the posts by course?",
        text: `Yes, you can definitely do that. Once you access any of the modules of the platform, click on the “All courses” drop-down menu from the top right corner, and then select the course that you are interested in.`,
      },
      {
        title: "Can I add images and links to my posts?",
        text: `Yes, you can do that in all of your posts. Select the image icon from the top right corner of the editing screen of your post, and then use postimg.org to generate a URL of your image. Copy and paste the “Direct Link” in the text field of the platform. Once you publish your entry, the image will be visible in your post. As for links, click the link icon from the top right corner, and then paste the link that you would like to add to your post. You can add multiple links.`,
      },
      {
        title: "Can I save drafts of my posts?",
        text: `Once in the editing screen of your post, click on the Save icon located on the top left corner of your screen.`,
      },
      {
        title: "Can I preview my posts before posting them?",
        text: `Yes. You can do that by clicking on the Padlock icon which is located at the top left corner of your screen. Then, you can return to editing mode by clicking on the icon again.`,
      },
      {
        title: "How do I change my profile settings?",
        text: `From your homepage, click on your profile picture at the top right corner of the screen, and then on “Settings”.`,
      },
      {
        title: "Where can I see my notifications?",
        text: `Once you are located in the “Collaborate” module, click on the three horizontal lines at the top left corner of your screen, and then on the “Notifications” option from the drop-down menu.`,
      },
      {
        title: "Can I delete my account?",
        text: `Yes, you can do that by accessing the danger zone section. Access your profile settings, and scroll down until you can see the danger zone section. Then, click on “Delete account”.`,
      },
      {
        title: "How can I return to the homepage of the platform?",
        text: `You can do that from the “Collaborate” module. Once there, click on the three horizontal lines from the top left corner of your screen. Then, click on the institutional logo located at the button of the drop-down menu.`,
      },
    ],
  }),
};
</script>
