<template>
  <v-dialog v-model="dialog" max-width="800" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        variant="plain"
        v-bind="activatorProps"
        append-icon="mdi-open-in-new"
        text="Usage terms and conditions"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        title="Term and Conditions"
        :subtitle="
          'ILEX - Writing Lab - ' +
          new Date().toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })
        "
      >
        <template v-slot:text>
          Welcome to ILEX - Writing Lab (“the Platform”). By accessing or using
          our Platform, you agree to comply with and be bound by the following
          terms and conditions (“Terms”). Please review these Terms carefully.
          If you do not agree to these Terms, you should not use our Platform.

          <br />
          <br />

          <strong>1. Acceptance of Terms</strong>

          <br />
          <br />

          By using the Platform, you agree to these Terms, our Privacy Policy,
          and any additional terms applicable to certain programs in which you
          may elect to participate. You also agree to abide by all applicable
          laws and regulations.

          <br />
          <br />

          <strong>2. Description of Services</strong>

          <br />
          <br />

          ILEX - Writing Lab provides online educational resources. The Platform
          may update, modify, or enhance these services at any time. As a beta
          tester, you acknowledge that the Platform is in a testing phase and
          may have bugs, issues, or incomplete features.

          <br />
          <br />

          <strong>3. User Responsibilities</strong>

          <br />
          <br />

          <strong> a. Account Creation: </strong>
          You must provide accurate and complete information when creating an
          account on the Platform. You are responsible for maintaining the
          confidentiality of your account and password.

          <strong> b. Eligibility: </strong>
          The Platform is intended for users who are at least 18 years old. By
          using the Platform, you accept that you meet this age requirement.

          <strong> c. Prohibited Conduct: </strong>
          You agree not to use the Platform for any unlawful purposes, to
          harass, abuse, or harm another person, or to engage in any conduct
          that restricts or inhibits anyone's use or enjoyment of the Platform.

          <br />
          <br />

          <strong>4. No Fees</strong>

          <br />
          <br />

          There are no fees associated with the use of the Platform during the
          beta testing phase. All services are provided free of charge to beta
          testers.

          <br />
          <br />

          <strong>5. Data Collection and Usage</strong>

          <br />
          <br />

          As a beta tester, you agree that we may collect and use your data,
          including but not limited to usage patterns, feedback, and personal
          information, to improve the Platform. We are committed to protecting
          your privacy and will handle your data in accordance with our Privacy
          Policy.

          <br />
          <br />

          <strong>6. Intellectual Property</strong>

          <br />
          <br />

          All content, including but not limited to course materials, videos,
          text and graphics, is the property of ILEX - Writing Lab or its
          licensors and is protected by intellectual property laws. You may not
          use, reproduce, or distribute any content from the Platform without
          our prior written consent.

          <br />
          <br />

          <strong>7. Privacy Policy</strong>

          <br />
          <br />

          Our Privacy Policy explains how we collect, use, and protect your
          personal information. By using the Platform, you consent to the
          collection and use of your information as outlined in our Privacy
          Policy.

          <br />
          <br />

          <strong>8. Termination</strong>

          <br />
          <br />

          We reserve the right to terminate or suspend your account and access
          to the Platform, without notice, for conduct that we believe violates
          these Terms or is harmful to other users of the Platform, us, or third
          parties, or for any other reason at our sole discretion.

          <br />
          <br />

          <strong>9. Disclaimers</strong>

          <br />
          <br />

          The Platform is provided on an “as is” and “as available” basis. As
          this is a beta version, we make no warranties, express or implied,
          regarding the operation or availability of the Platform or the
          information, content, materials, or products included on the Platform.
          The Platform may have bugs, issues, or incomplete features.

          <br />
          <br />

          <strong>10. Limitation of Liability</strong>

          <br />
          <br />

          To the fullest extent permitted by law, ILEX - Writing Lab and its
          affiliates, officers, employees, agents, and licensors shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or other
          intangible losses, resulting from (a) your use of or inability to use
          the Platform; (b) any unauthorized access to or use of our servers
          and/or any personal information stored therein; (c) any interruption
          or cessation of transmission to or from the Platform.

          <br />
          <br />

          <strong>11. Governing Law</strong>

          <br />
          <br />

          These Terms shall be governed by and construed in accordance with the
          laws of Colombia/Risaralda, without regard to its conflict of law
          principles.

          <br />
          <br />

          <strong>12. Changes to Terms</strong>

          <br />
          <br />

          We reserve the right to modify these Terms at any time. We will notify
          you of any changes by posting the new Terms on the Platform. Your
          continued use of the Platform after any such changes constitutes your
          acceptance of the new Terms.

          <br />
          <br />

          <strong>13. Contact Us</strong>

          <br />
          <br />

          If you have any questions about these Terms, please contact us at
          <a :href="mailto" target="_blank" rel="noopener noreferrer"
            >Contact Information</a
          >.
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="flat"
            text="I understand"
            color="surface-variant"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { genContactUs } from "@/lib/mailto";

export default {
  data: () => ({
    dialog: false,
    mailto: genContactUs(),
  }),
};
</script>
