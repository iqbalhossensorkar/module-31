// 1) How will you access Sophia’s secondary school location?

let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary:
          [
            { school_name: "ABC primary school" },
            { location: "Peters burg" }
          ]
      },
      {
        secondary:
          [
            {
              school_name: "ABC secondary school"

            },

            { location: "St Lorence" }
          ]
      },
    ]
  }
}

data.map(e => {
  for (const i in e) {
    const { study } = e[i];
    const { secondary } = study;
    

    
  }
});


