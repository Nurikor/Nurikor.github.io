export const aboutSectionsData = [
  {
    id: 'bio',
    title: {
      en: 'General Information',
      ru: 'Общая информация'
    },
    items: {
      en: [
        '17 years old, native of Kyrgyz Republic, he/him',
        'College student studying software development',
        'Language proficiency: Russian — native, Kyrgyz — C1, English — A2'
      ],
      ru: [
        '17 лет, уроженец Кыргызской Республики, он/его',
        'Студент колледжа, изучаю разработку и программирование',
        'Уровень языков: русский — родной, кыргызский — C1, английский — A2'
      ]
    }
  },
  {
    id: 'fursona',
    title: {
      en: 'My Fursona',
      ru: 'Моя фурсона'
    },
    content: {
      en: 'A black snow leopard with distinctive amber-yellow spots, a classic large tail, and matching amber eyes.',
      ru: 'Чёрный илбирс с характерными янтарно-жёлтыми пятнами, классическим большим хвостом и янтарными глазами. и со шрамом на шее'
    },
    images: [
      {
        src: 'public/img/',
        alt: {
          en: 'Coming soon',
          ru: 'Скоро будет добавлено'
        },
        caption: {
          en: 'Nurikor',
          ru: 'Нурикор'
        }
      }
    ]
  },
  {
    id: 'journey',
    title: {
      en: 'My Online Journey (WIP)',
      ru: 'Мой путь в интернете (WIP)'
    },
    content: {
      en: 'A chronicle of my journey through online communities, projects, and games, currently a work in progress (WIP) and to be expanded with new chapters over time.',
      ru: 'Хроника моего пути по онлайн-сообществам, проектам и играм, раздел пока находится в разработке (WIP) и со временем будет дополняться новыми главами.'
    },
    periods: [
      {
        period: '2018 — 2020',
        title: {
          en: 'First Steps: Minecraft & Early Communities',
          ru: 'Первые шаги: Minecraft и первые сообщества'
        },
        content: {
          en: 'It all started around 2018 with searching for Minecraft servers, when I was exploring various vanilla survival servers and eventually settled on a project where I spent most of my free time. Making friends there, we built bases and survived together, and later on, following a new wipe, a friend and I decided to try out the griefing section of the same server, though after several seasons it grew repetitive, and I went back to classic survival.',
          ru: 'Всё началось примерно в 2018 году с поиска серверов по Minecraft, когда я искал различные ванильные серверы выживания и в итоге нашёл один проект, где и проводил большую часть свободного времени. Найдя там друзей, мы вместе обустраивали базу и выживали, а чуть позже на новом вайпе решили с другом перейти в гриферский раздел этого же сервера, но спустя несколько сезонов гриферство наскучило, и я вернулся обратно к классическому выживанию.'
        }
      },
      {
        period: '2020 — 2022',
        title: {
          en: 'Media Projects, Livestreams & Moderation',
          ru: 'Медиа-сфера, стримы и модерация'
        },
        content: {
          en: 'While playing on the survival server, I noticed a content creator hosting in-game events, and after finding out about him through friends, I became a regular viewer of his YouTube channel and an active participant in his streams. During a livestream with a giveaway for moderator roles, I managed to win, which brought us closer together: I set up and configured a Discord server for him, began appearing in his videos and livestreams, becoming his trusted right-hand moderator, until he eventually entered college and paused his activities.',
          ru: 'Во время выживания я увидел, что один медиаблогер начал проводить на сервере свои ивенты, и, узнав о нём через друзей, стал постоянным зрителем его YouTube-канала и активным участником стримов. На одной из трансляций с розыгрышем прав модератора мне удалось победить, благодаря чему мы сблизились и сдружились: я создал и настроил ему Discord-сервер, начал сниматься в его роликах и на стримах, став его доверенным лицом («правой рукой»), пока со временем блогер не поступил в колледж и не приостановил свою деятельность.'
        }
      },
      {
        period: '2021 — 2022',
        title: {
          en: 'Mobile CRMP (Black Russia) & First Leadership Roles',
          ru: 'CRMP (Black Russia) и первые должности'
        },
        content: {
          en: 'Seeing a friend play SA-MP during a visit, I wanted to find a similar game on mobile, which led me to an ad for Black Russia (CRMP), where I once again started spending a lot of my free time. Simple in-game progression quickly felt insufficient, so I joined factions, tried various roles, and aimed for Senior Staff (SS) positions, which required stretching my age during the voice interview at 12 years old—passing it smoothly without a single mistake—and our team bonded so well with the faction leader that we continued moving together to leadership posts across other organizations.',
          ru: 'Увидев, как знакомый в гостях играет в SA-MP, мне захотелось найти что-то похожее на телефоне, и так я наткнулся на рекламу Black Russia (CRMP), где снова стал проводить много свободного времени. Обычного развития быстро стало не хватать, поэтому я пошёл в организации, попробовал себя в разных профессиях и захотел встать в Старший Состав (СС), ради чего в 12 лет пришлось слукавить с возрастом на обзвоне, который я в итоге прошёл быстро и без единой ошибки, а с лидером и командой мы настолько сдружились, что дальше переходили на руководящие посты в другие организации уже вместе.'
        }
      },
      {
        period: '2022 — 2023',
        title: {
          en: 'Server Administration & Sanctions',
          ru: 'Администрация сервера и санкции'
        },
        content: {
          en: 'At age 13, I decided to apply for the server administration, starting as a trainee support agent, qualifying, and becoming a server administrator, though I was later dismissed for minor game file modifications strictly prohibited by the rules. Returning to senior faction positions, I was later led by server acquaintances into unauthorized activities advertising interview assistance, resulting in social media bans and restrictions from high-ranking roles, causing me to temporarily leave the game.',
          ru: 'В 13 лет я решил пойти на пост администрации сервера и, начав со стажёра (агента поддержки), успешно сдал квалификацию и стал администратором, однако позже был снят за минимальное изменение файлов игры, что строго запрещалось правилами. Вернувшись к должностям в старших составах фракций, я позже по предложению знакомых оказался втянут в запрещённую деятельность с рекламой прохождения обзвонов, за что получил блокировку в социальных сетях проекта и запрет на высшие должности, временно забросив игру.'
        },
        links: [
          {
            text: {
              en: 'Position history on Black Russia forum',
              ru: 'История должностей на форуме Black Russia'
            },
            url: 'https://forum.blackrussia.online/members/nurikor_rondaev.575651/#about'
          }
        ]
      },
      {
        period: {
          en: '2022 — Present',
          ru: '2022 — н. в.'
        },
        title: {
          en: 'Geopolitical Minecraft Servers',
          ru: 'Политические серверы Minecraft'
        },
        content: {
          en: 'During 7th grade, a friend and I developed a strong interest in history and political science, leading us to geopolitical servers in Minecraft, where we spent significant time building nations and engaging in diplomacy.',
          ru: 'Учась в 7 классе, мы с другом всерьёз увлеклись историей и политологией, после чего переключились на военно-политические серверы в Minecraft, где проводили много времени, создавая и развивая свои государства.'
        }
      },
      {
        period: '2025 — 2026',
        title: {
          en: 'Comeback, Appeal & Reinstatement',
          ru: 'Возвращение, амнистия и восстановление'
        },
        content: {
          en: 'When another season on the geopolitical server ended, I found myself with spare time and decided to return to Black Russia by applying for administrator, but previous sanctions came to light during the interview, and the situation was escalated to the Head Administrator (GA). After a one-on-one conversation in a dedicated voice channel, I was advised to submit a formal appeal on the forum, and after proving my reliability through leadership roles in factions and having my amnesty approved, I was successfully reinstated as an administrator.',
          ru: 'Когда очередной сезон на военно-политическом сервере подошёл к концу, появилось свободное время, и я решил вернуться на Black Russia, подав заявку на пост администратора, но во время обзвона старые санкции вскрылись, и дело передали на разбирательство Главному Администратору (ГА). После личного разговора в отдельном голосовом канале мне порекомендовали подать официальное обжалование на форуме, после чего я доказал свою надёжность работой на руководящих должностях в организациях, успешно получил одобрение амнистии и был восстановлен на посту администратора.'
        }
      }
    ]
  }
];
