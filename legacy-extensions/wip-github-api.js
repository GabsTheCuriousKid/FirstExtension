(function(Scratch) {
    const variables = {};
    
    let LISTMENU = [
      'Repo ID',
      'Node ID',
      'Description',
      'Created at',
      'Most Used Language'
    ];
    let COUNTMENU = [
      'Watchers',
      'Stargazers',
      'Size',
      'Open Issues'
    ];
    class Extension {
        getInfo() {
            return {
              id: "GithubAPI",
              name: "GitHub API",
              blocks: [
                {
                  opcode: 'GithubAPI_Fetch',
                  text: 'fetch [LIST] from org. [ORG] repo. [REPO]',
                  blockType: Scratch.BlockType.REPORTER,
                  arguments: {
                    LIST: {
                      type: Scratch.ArgumentType.STRING,
                      menu: 'LIST'
                    },
                    ORG: {
                      type: Scratch.ArgumentType.STRING,
                      defaultValue: 'Dinosaurmod'
                    },
                    REPO: {
                      type: Scratch.ArgumentType.STRING,
                      defaultValue: 'dinosaurmod.github.io'
                    },
                  }
                },
                {
                  opcode: 'GithubAPI_FetchCount',
                  text: 'fetch [COUNT] count from org. [ORG] repo. [REPO]',
                  blockType: Scratch.BlockType.REPORTER,
                  arguments: {
                    COUNT: {
                      type: Scratch.ArgumentType.STRING,
                      menu: 'COUNT'
                    },
                    ORG: {
                      type: Scratch.ArgumentType.STRING,
                      defaultValue: 'DinosaurMod'
                    },
                    REPO: {
                      type: Scratch.ArgumentType.STRING,
                      defaultValue: 'dinosaurmod.github.io'
                    },
                  }
                },
                {
                  opcode: 'd',
                  text: 'hat',
                  blockType: Scratch.BlockType.HAT,
                  arguments: {}
                },
              ],
              menus: {
                LIST: {
                  acceptReporters: true,
                  items: LISTMENU
                },
                COUNT: {
                  acceptReporters: true,
                  items: COUNTMENU
                },
              }
            }
        }
        GithubAPI_Fetch(args, util) {
          let api_url = 'https://api.github.com/' + 'repos/' + args.ORG + '/' + args.REPO
          if (args.LIST === 'Repo ID') {
            const result = Scratch.fetch(api_url)
            .then( res => res.json())
            .then(data => (data.id))
            .catch(() => "");
            return result
          } else if (args.LIST === 'Node ID') {
            const result = Scratch.fetch(api_url)
            .then( res => res.json())
            .then(data => (data.node_id))
            .catch(() => "");
            return result
          } else if (args.LIST === 'Description') {
            const result = Scratch.fetch(api_url)
            .then( res => res.json())
            .then(data => (data.description))
            .catch(() => "");
            return result
          } else if (args.LIST === 'Created at') {
            const result = Scratch.fetch(api_url)
            .then( res => res.json())
            .then(data => (data.created_at))
            .catch(() => "");
            return result
          } else if (args.LIST === 'Most Used Language') {
            const result = Scratch.fetch(api_url)
            .then( res => res.json())
            .then(data => (data.language))
            .catch(() => "");
            return result
          }
          
        }
        GithubAPI_FetchCount(args) {
          
        }
        d() {
          return true
        }
    }

    Scratch.extensions.register(new Extension());
})(Scratch);