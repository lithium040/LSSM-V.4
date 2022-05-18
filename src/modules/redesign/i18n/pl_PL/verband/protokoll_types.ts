export default {
    mission: { regex: /Rozpoczęto dużą misję/u },
    event: { regex: /Rozpoczęło się wydarzenie sojuszu/u },
    appl_accepted: { regex: /Dodano do sojuszu/u },
    appl_declined: { regex: /Odrzucono wniosek/u },
    deny_appl: { regex: /Nie można zgłaszać się do sojuszu/u },
    allow_appl: { regex: /Można zgłaszać się do sojuszu/u },
    left: { regex: /Opuszczono sojusz/u },
    kicked: { regex: /Wyrzucono z sojuszu/u },
    set_chatban: { regex: /Ustawiono blokadę czatu/u },
    remove_chatban: { regex: /Usunięto blokadę czatu/u },
    added_role: { regex: /Ustaw jako .*?/u, title: 'Dodano role' },
    removed_role: {
        regex: /Usunięto ze stanowiska .*?/u,
        title: 'Usunięto role',
    },
    start_schooling: { regex: /Utworzono kurs/u },
    complete_schooling: { regex: /Ukończono kurs/u },
    start_extension: { regex: /Rozpoczęto rozbudowę/u },
    complete_extension: { regex: /Rozbudowa zakończona/u },
    build: { regex: /Postawiono budynek/u },
    demolish: { regex: /Usunięto budynek/u },
};
