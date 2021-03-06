// ./changelog.config.js

module.exports = {
  "disableEmoji": false,
  "list": [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf"
  ],
  "maxMessageLength": 64,
  "minMessageLength": 3,
  "questions": [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna"
  ],
  "scopes": [],
  "types": {
    "chore": {
      "description": "Build process or auxiliary tool changes",
      "emoji": "ð¤", // å½åç±»åçcommitææ¾ç¤ºçè¡¨æ
      "value": "chore"
    },
    "ci": {
      "description": "CI related changes",
      "emoji": "ð¡",
      "value": "ci"
    },
    "docs": {
      "description": "Documentation only changes",
      "emoji": "âï¸",
      "value": "docs"
    },
    "feat": {
      "description": "A new feature",
      "emoji": "ð¸",
      "value": "feat"
    },
    "fix": {
      "description": "ä¿®å¤bug",
      "emoji": "ð",
      "value": "fix"
    },
    "perf": {
      "description": "A code change that improves performance",
      "emoji": "â¡ï¸",
      "value": "perf"
    },
    "refactor": {
      "description": "A code change that neither fixes a bug or adds a feature",
      "emoji": "ð¡",
      "value": "refactor"
    },
    "release": {
      "description": "Create a release commit",
      "emoji": "ð¹",
      "value": "release"
    },
    "style": {
      "description": "Markup, white-space, formatting, missing semi-colons...",
      "emoji": "ð",
      "value": "style"
    },
    "test": {
      "description": "Adding missing tests",
      "emoji": "ð",
      "value": "test"
    }
  }
}
