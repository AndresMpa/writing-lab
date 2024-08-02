export const genMailto = () => {
  const helpMail = import.meta.env.VITE_HELP_MAIL.replaceAll(" ", "%20");
  const helpSubject = import.meta.env.VITE_HELP_SUBJECT_MAIL.replaceAll(
    " ",
    "%20"
  );
  const helpBody = import.meta.env.VITE_HELP_BODY_MAIL.replaceAll(" ", "%20");

  return `mailto:${helpMail}?subject=${helpSubject}&body=${helpBody}`;
};

export const genContactUs = () => {
  const contactMail = import.meta.env.VITE_CONTACT_MAIL.replaceAll(" ", "%20");
  const contactSubject = import.meta.env.VITE_CONTACT_SUBJECT_MAIL.replaceAll(
    " ",
    "%20"
  );
  const contactBody = import.meta.env.VITE_CONTACT_BODY_MAIL.replaceAll(
    " ",
    "%20"
  );

  return `mailto:${contactMail}?subject=${contactSubject}&body=${contactBody}`;
};

export const deleteEmail = (mailId) => {
  const deleteMail = import.meta.env.VITE_DELETE_MAIL.replaceAll(" ", "%20");
  const deleteSubject = import.meta.env.VITE_DELETE_SUBJECT_MAIL.replaceAll(
    " ",
    "%20"
  );
  const deleteBody = import.meta.env.VITE_DELETE_BODY_MAIL.replaceAll(
    " ",
    "%20"
  );

  return `mailto:${deleteMail}?subject=${
    deleteSubject + " - " + mailId
  }&body=${deleteBody}`;
};
