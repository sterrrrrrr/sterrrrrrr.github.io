// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. authors are listed in alphabetical order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can download my CV using the button on the top right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching Experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-our-paper-a-multi-dimensional-online-contention-resolution-scheme-for-revenue-maximization-is-accepted-to-soda-2025",
          title: 'Our paper “A Multi-Dimensional Online Contention Resolution Scheme for Revenue Maximization” is accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-robust-max-selection-is-accepted-to-isit-2025",
          title: 'Our paper “Robust Max Selection” is accepted to ISIT 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-deterministic-refund-mechanisms-is-accepted-to-sagt-2025",
          title: 'Our paper “Deterministic Refund Mechanisms” is accepted to SAGT 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-multi-unit-combinatorial-prophet-inequalities-is-accepted-to-wine-2025",
          title: 'Our paper “Multi-Unit Combinatorial Prophet Inequalities” is accepted to WINE 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-proportionality-from-low-dimensional-approval-data-is-accepted-to-aamas-2026",
          title: 'Our paper “Proportionality from Low-Dimensional Approval Data” is accepted to AAMAS 2026!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%69%79%69%68@%63%73.%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
