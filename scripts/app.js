angular.module('app', ['ui.bootstrap', 'hc.marked', 'akoenig.deckgrid'])

.controller('main', function($scope) {
  $scope.projects = [
    {
      name: 'Kanban',
      descriptions: [
        'Kanban is my senior thesis project at Carthage College. It is a single page web app written with the MEAN stack, meant for agile developers (or anyone really) who want to create an electronic Kanban board. It is meant to be user friendly and simple. You can create a board and place *stories* on it in different columns, by dragging and dropping, to represent the state of the story. Then, *tasks* can be added to these stories.',
        'There is also the idea of *sprints*. Each sprint runs for a specified amount of time, and then a user can create a new sprint to clear the board and start over, while keeping the older sprints. If a user wants to carry their unfinished stories over to the next sprint, there is also an option for that.',
        'Once a user has started a board, they may want to share it. Kanban allows them to add other users to the boards, and then those users can also collaborate on it and be assigned to certain stories they may be working in.'
      ],
      links: [{
        text: 'Live',
        href: 'http://kanban-boards.herokuapp.com/'
      }, {
        text: 'GitHub',
        href: 'https://github.com/mpeterson2/kanban'
      }]
    },

    {
      name: 'Turbo Wookie',
      descriptions: ['Turbo Wookie is a collaborative music jukebox. A group of people can start up a Turbo Wookie instance, share the address, then build and listen to a playlist together. Turbo Wookie is written in Go for the backend with Dart as the frontend. If you are wondering about the name, GitHub suggested it when we created the repository, and we took it.'],
      links: [{
        text: 'Website',
        href: 'http://turbowookie.github.io/'
      }, {
        text: 'GitHub',
        href: 'https://github.com/turbowookie/turbo-wookie'
      }],
      nextDescriptions: ['Although I haven\'t kept it up to date, I also made a full Dart version to learn how server side Dart development was like.'],
      nextLinks: [{
        text: 'GitHub',
        href: 'https://github.com/mpeterson2/turbo-wookie'
      }]
    },

    {
      name: 'Pdf Reviewer',
      descriptions: [
        'Pdf Reviewer was one project I created with the Developer Liberation Front at North Carolina State University over the summer of 2014. It is a webapp designed to help peers review each other\'s papers, using GitHub\'s issue tracker. The writer of the paper can request someone to be a review on the paper, which will then tell the reviewer that they have been requested to be a reviewer. They can download the paper, and add comments using a simple domain specific language to add labels and link it to already existing issues if they choose to. They can then upload the review back to the web app, and it generate GitHub issues with the reviewer\'s labels, and issues. After this process, the writer can look at the issues, and either fix them, or ignore them.',
        'As for the technical details, Pdf Reviewer runs on App Engine, using Java as a back and JavaScript as a frontend. It uses the GitHub api in order to create issues, search for the user\'s repositories, grab users (to suggest reviewers) and more.'
      ],
      links: [{
          text: 'Live',
          href: 'https://pdfreviewhub.appspot.com/'
        }, {
          text: 'GitHub',
          href: 'https://github.com/DeveloperLiberationFront/Pdf-Reviewer'
        }]
    },

    {
      name: 'java-httpserver',
      descriptions: [
        'java-httpserver is pretty much what it sounds like, a HTTP server written in Java. Our goal was to create an easy to use API for Java developers trying to create a server with a RESTful API.'
      ],
      links: [{
          text: 'Website',
          href: 'http://dkuntz2.github.io/java-httpserver/'
        }, {
          text: 'GitHub',
          href: 'https://github.com/storytellersoftware/java-httpserver'
        }]
    },

    {
      name: 'Save Session',
      descriptions: [
        'Save Session is a package for the Atom text editor. It is designed to restore your previous session in Atom by restoring file contents (whether or not they were saved to disk), the cursor position in each file, window size and position, and the last open project. The package is highly configurable, allowing you to choose what you want to be restored and what default Atom behaviors should be suppressed (such as the save prompt on exit).',
        'I wrote this package because I wanted to try out the Atom editor, and immediately, I was disappointed that it didn\'t have this feature. So, I decided to learn some CoffeeScript and the Atom API to try out the text editor.',
        'This package has now be deprecated as the Atom team has started adding these features to the core of Atom.'
      ],
      links: [{
          text: 'Atom Package',
          href: 'https://atom.io/packages/save-session'
        }, {
          text: 'GitHub',
          href: 'https://github.com/mpeterson2/Save-Session'
        }]
    },

    {
      name: 'squatch-sighter',
      descriptions: [
        'squatch-sighter is a map where anybody can report a Sasquatch sighting. That\'s about it. So if you see a Sasquatch, be sure to report it. It was written for a class assignment where we had to use Ruby Sinatra to build a slightly complex web app. The app is deployed on Heroku if you are interested in seeing it in action.'
      ],
      links: [{
          text: 'Live',
          href: 'http://squatch-sighter.herokuapp.com/'
        }, {
          text: 'GitHub',
          href: 'https://github.com/mpeterson2/squatch-sighter'
        }]
    },

    {
      name: 'Trust Estimator',
      descriptions: [
        'This was a project that I had researched with The Developer Liberation Front at North Carolina State University over the summer of 2014. The goal of the project was to estimate trust between two developers using social networks in order to give software tool recommendations from trusted developers. For the project, I choose GitHub for the social network. I estimated the trust of the members of GitHub\'s GitHub organization and created some chord graphs with D3.js to represent the data. I also wrote a paper about it.'
      ],
      links: [{
          text: 'GitHub',
          href: 'https://github.com/mpeterson2/trust_estimator'
        }, {
          text: 'Data',
          href: 'http://mpeterson2.github.io/trust_estimator/'
        }, {
          text: 'Paper',
          href: 'https://github.com/mpeterson2/trust_estimator/blob/master/paper/Estimating%20Trust%20Using%20Social%20Networks%20for%20Recommendation%20Systems.pdf'
        }]
    },

    {
      name: 'dart_mpd',
      descriptions: [
        'After working on the Dart version of Turbo Wookie, I decided to write dart_mpd. dart_mpd is a library for Dart that allows a developer to easily interact with an MPD instance. Instead of dealing with MPD\'s protocol yourself, you can ask this library to.'
      ],
      links: [{
          text: 'GitHub',
          href: 'https://github.com/mpeterson2/dart_mpd'
        }]
    },

  ];
});