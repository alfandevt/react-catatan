const LANGUAGES = [
  {
    id: "id-ID",
    appTitle: "Catatan App",
    appMenu: {
      menuLabel: "Opsi",
      langLabel: "English",
      themeLabel: "Tema",
      logoutLabel: "Keluar",
    },
    appNav: {
      noteLink: "Catatan",
      archiveLink: "Arsip",
    },
    loginPage: {
      sectionHeading: "Masuk",
      emailLabel: "Email",
      passwordLabel: "Kata Sandi",
      infoHintLabel: "Belum punya akun?",
      infoHintLinkLabel: "daftar disini",
      submitButtonLabel: "Kirim",
    },
    registerPage: {
      sectionHeading: "Registrasi",
      nameLabel: "Nama",
      emailLabel: "Email",
      passwordLabel: "Kata Sandi",
      passwordConfirmLabel: "Konfirmasi Kata Sandi",
      infoHintLabel: "Sudah punya akun?",
      infoHintLinkLabel: "masuk disini",
      submitButtonLabel: "Kirim",
    },
    activeNotePage: {
      sectionHeading: "Catatan",
      inputPlaceholder: "Cari catatan...",
      itemButtonLabel: "Buka catatan",
    },
    archiveNotePage: {
      sectionHeading: "Arsip",
      inputPlaceholder: "Cari arsip...",
      itemButtonLabel: "Buka arsip",
    },
    addNotePage: {
      sectionHeading: "Buat Catatan",
      counterLabel: "Sisa karakter",
      titlePlaceholder: "Judul catatan",
      bodyPlaceholder: "Konten catatan...",
      cancelButton: "Kembali",
      submitButton: "Simpan",
    },
    detailNotePage: {
      sectionHeading: "Catatan",
      sectionHeadingArchive: "Arsip",
    },
    errorPage: {
      sectionHeading: "Halaman tidak ditemukan...",
      actionLink: "Kembali ke beranda",
    },
    alerts: {
      noteAction: {
        moveNoteSuccess: "Berhasil memindahkan catatan!",
        moveNoteFail: "Gagal memindahkan catatan!",
        deleteNoteSuccess: "Berhasil menghapus catatan!",
        deleteNoteFail: "Gagal menghapus catatan!",
        addNoteSuccess: "Berhasil menambah catatan!",
        addNoteFail: "Gagal menambah catatan!",
      },
      authAction: {
        userSession: "Sesi anda telah berakhir",
        createAccountSuccess: "Berhasil membuat akun!",
        createAccountFail: "Gagal membuat akun!",
        loginSuccess: "Berhasil masuk!",
        loginFail: "Akun belum terdaftar atau kesalahan kredensial",
        forbiddenNote: "Tidak dapat mengakses catatan!",
        logoutLabel: "Berhasil keluar",
      },
      userFormValidation: {
        emailEmpty: "Email harus diisi",
        usernameEmpty: "Nama harus diisi",
        usernameLength: "Minimum tiga karakter untuk nama",
        passwordEmpty: "Kata sandi harus diisi",
        passwordLength: "Minimum enam karakter untuk kata sandi",
        passwordMismatch: "Kata sandi tidak sama",
        formValid: "Form valid",
      },
    },
  },
  {
    id: "en-EN",
    appTitle: "Note App",
    appMenu: {
      menuLabel: "Options",
      langLabel: "Bahasa",
      themeLabel: "Theme",
      logoutLabel: "Logout",
    },
    appNav: {
      noteLink: "Notes",
      archiveLink: "Archives",
    },
    loginPage: {
      sectionHeading: "Login",
      emailLabel: "Email",
      passwordLabel: "Password",
      infoHintLabel: "Don't have an account?",
      infoHintLinkLabel: "register here",
      submitButtonLabel: "Submit",
    },
    registerPage: {
      sectionHeading: "Registrations",
      nameLabel: "Name",
      emailLabel: "Email",
      passwordLabel: "Password",
      passwordConfirmLabel: "Password Confirm",
      infoHintLabel: "Have an account?",
      infoHintLinkLabel: "login here",
      submitButtonLabel: "Submit",
    },
    activeNotePage: {
      sectionHeading: "Notes",
      inputPlaceholder: "Find notes...",
      itemButtonLabel: "Open note",
    },
    archiveNotePage: {
      sectionHeading: "Archives",
      inputPlaceholder: "Find archives...",
      itemButtonLabel: "Open archive",
    },
    addNotePage: {
      sectionHeading: "Create Note",
      counterLabel: "Character Left",
      titlePlaceholder: "Note title",
      bodyPlaceholder: "Note content...",
      cancelButton: "Back",
      submitButton: "Save",
    },
    detailNotePage: {
      sectionHeading: "Note",
      sectionHeadingArchive: "Archive",
    },
    errorPage: {
      sectionHeading: "Page not found...",
      actionLink: "Back to home page...",
    },
    alerts: {
      noteAction: {
        moveNoteSuccess: "Note moved successfuly!",
        moveNoteFail: "Failed to move note!",
        deleteNoteSuccess: "Note deleted!",
        deleteNoteFail: "Failed to delete note!",
        addNoteSuccess: "Note added successfuly!",
        addNoteFail: "Failed to add note!",
      },
      authAction: {
        userSession: "Your session is over",
        createAccountSuccess: "Account created!",
        createAccountFail: "Failed to create account!",
        loginSuccess: "Logged in!",
        loginFail: "Unregistered account or invalid credentials",
        forbiddenNote: "Unable to access note!",
        logoutLabel: "Logged out",
      },
      userFormValidation: {
        emailEmpty: "Email must be filled",
        usernameEmpty: "Name must be filled",
        usernameLength: "Three character is minimum for name",
        passwordEmpty: "Password must be filled",
        passwordLength: "Six character is minimum for password",
        passwordMismatch: "Password isn't match",
        formValid: "Form is valid",
      },
    },
  },
];

export const idID = "id-ID";
export const enEN = "en-EN";
export const LANG_KEY = "language";

export const getLangById = (id) => {
  return LANGUAGES.find((lang) => lang.id === id);
};

export const getLocalLang = () => {
  const savedLangId = localStorage.getItem(LANG_KEY);
  if (!savedLangId) {
    return getLangById(idID);
  }
  return getLangById(savedLangId);
};

export const setLocalLang = (langId) => {
  return localStorage.setItem(LANG_KEY, langId);
};

export default LANGUAGES;
