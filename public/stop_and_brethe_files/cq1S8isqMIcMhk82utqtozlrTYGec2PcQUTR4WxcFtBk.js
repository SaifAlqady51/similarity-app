/*FB_PKG_DELIM*/

__d(
  "PolarisCommentReplyButton_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PolarisCommentReplyButton_comment",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "XDTUserDict",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: a,
                  action: "THROW",
                  path: "user.pk",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "user.username",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "user",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "parent_comment_id",
            storageKey: null,
          },
        ],
        type: "XDTCommentDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisCommentText_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisCommentText_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "pk",
                  storageKey: null,
                },
                action: "THROW",
                path: "user.pk",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_verified",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "user",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "restricted_status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_at",
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisCommentTranslationPromptQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "comment_id" },
          { defaultValue: !1, kind: "LocalArgument", name: "is_caption" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "comment_id",
                    variableName: "comment_id",
                  },
                  {
                    kind: "Variable",
                    name: "is_caption",
                    variableName: "is_caption",
                  },
                ],
                kind: "ObjectValue",
                name: "data",
              },
            ],
            concreteType: "XDTCommentTranslationResponse",
            kind: "LinkedField",
            name: "xdt_api__v1__comment_translate",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "translation",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PolarisCommentTranslationPromptQuery",
          selections: b,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PolarisCommentTranslationPromptQuery",
          selections: b,
        },
        params: {
          id: "6059920417407801",
          metadata: {},
          name: "PolarisCommentTranslationPromptQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisInlineCommentText_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisInlineCommentText_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "pk",
                  storageKey: null,
                },
                action: "THROW",
                path: "user.pk",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_verified",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "user",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "restricted_status",
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostChildCommentsQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "after" },
        b = { defaultValue: null, kind: "LocalArgument", name: "before" },
        c = { defaultValue: null, kind: "LocalArgument", name: "first" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "is_chronological",
        },
        e = { defaultValue: null, kind: "LocalArgument", name: "last" },
        f = { defaultValue: null, kind: "LocalArgument", name: "media_id" },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "parent_comment_id",
        },
        h = [
          { kind: "Variable", name: "after", variableName: "after" },
          { kind: "Variable", name: "before", variableName: "before" },
          { kind: "Variable", name: "first", variableName: "first" },
          {
            kind: "Variable",
            name: "is_chronological",
            variableName: "is_chronological",
          },
          { kind: "Variable", name: "last", variableName: "last" },
          { kind: "Variable", name: "media_id", variableName: "media_id" },
          {
            kind: "Variable",
            name: "parent_comment_id",
            variableName: "parent_comment_id",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "PolarisPostChildCommentsQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "PolarisPostChildComments_items_connection",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, b, f, g, d, c, e],
          kind: "Operation",
          name: "PolarisPostChildCommentsQuery",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: "XDTGetChildCommentsResponseConnection",
              kind: "LinkedField",
              name: "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTGetChildCommentsResponseEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XDTCommentDict",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        i,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "comment_like_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "child_comment_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "restricted_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "parent_comment_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_translation",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTUserDict",
                          kind: "LinkedField",
                          name: "user",
                          plural: !1,
                          selections: [
                            i,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "username",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "profile_pic_url",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "fbid_v2",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "id",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_unpublished",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_verified",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_liked_comment",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTCommentGiphyMediaInfo",
                          kind: "LinkedField",
                          name: "giphy_media_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XDTCommentGiphyMediaImages",
                              kind: "LinkedField",
                              name: "images",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XDTCommentGiphyMediaFixedHeightImages",
                                  kind: "LinkedField",
                                  name: "fixed_height",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "url",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "text",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "created_at",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_covered",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTPageInfo",
                  kind: "LinkedField",
                  name: "page_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "end_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_next_page",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_previous_page",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "start_cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: h,
              filters: ["media_id", "parent_comment_id", "is_chronological"],
              handle: "connection",
              key: "PolarisPostComments__xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
              kind: "LinkedHandle",
              name: "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
            },
          ],
        },
        params: {
          id: "6160852890640278",
          metadata: {},
          name: "PolarisPostChildCommentsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostChildComments_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisPostChildComments_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "child_comment_count",
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostCommentsChildrenPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "after" },
          { defaultValue: null, kind: "LocalArgument", name: "before" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "is_chronological",
          },
          { defaultValue: null, kind: "LocalArgument", name: "last" },
          { defaultValue: null, kind: "LocalArgument", name: "media_id" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "parent_comment_id",
          },
        ],
        b = [
          { kind: "Variable", name: "after", variableName: "after" },
          { kind: "Variable", name: "before", variableName: "before" },
          { kind: "Variable", name: "first", variableName: "first" },
          {
            kind: "Variable",
            name: "is_chronological",
            variableName: "is_chronological",
          },
          { kind: "Variable", name: "last", variableName: "last" },
          { kind: "Variable", name: "media_id", variableName: "media_id" },
          {
            kind: "Variable",
            name: "parent_comment_id",
            variableName: "parent_comment_id",
          },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PolarisPostCommentsChildrenPaginationQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "PolarisPostChildComments_items_connection",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PolarisPostCommentsChildrenPaginationQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "XDTGetChildCommentsResponseConnection",
              kind: "LinkedField",
              name: "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTGetChildCommentsResponseEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XDTCommentDict",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        c,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "comment_like_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "child_comment_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "restricted_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "parent_comment_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_translation",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTUserDict",
                          kind: "LinkedField",
                          name: "user",
                          plural: !1,
                          selections: [
                            c,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "username",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "profile_pic_url",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "fbid_v2",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "id",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_unpublished",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_verified",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_liked_comment",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTCommentGiphyMediaInfo",
                          kind: "LinkedField",
                          name: "giphy_media_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XDTCommentGiphyMediaImages",
                              kind: "LinkedField",
                              name: "images",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XDTCommentGiphyMediaFixedHeightImages",
                                  kind: "LinkedField",
                                  name: "fixed_height",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "url",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "text",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "created_at",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_covered",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTPageInfo",
                  kind: "LinkedField",
                  name: "page_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "end_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_next_page",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_previous_page",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "start_cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: b,
              filters: ["media_id", "parent_comment_id", "is_chronological"],
              handle: "connection",
              key: "PolarisPostComments__xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
              kind: "LinkedHandle",
              name: "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
            },
          ],
        },
        params: {
          id: "6251406201632996",
          metadata: {},
          name: "PolarisPostCommentsChildrenPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostChildComments_items_connection.graphql",
  ["PolarisPostCommentsChildrenPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "after" },
          { kind: "RootArgument", name: "before" },
          { kind: "RootArgument", name: "first" },
          { kind: "RootArgument", name: "is_chronological" },
          { kind: "RootArgument", name: "last" },
          { kind: "RootArgument", name: "media_id" },
          { kind: "RootArgument", name: "parent_comment_id" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: null, cursor: null, direction: "bidirectional", path: a },
          ],
          refetch: {
            connection: {
              forward: { count: "first", cursor: "after" },
              backward: { count: "last", cursor: "before" },
              path: a,
            },
            fragmentPathInResult: [],
            operation: b("PolarisPostCommentsChildrenPaginationQuery.graphql"),
          },
        },
        name: "PolarisPostChildComments_items_connection",
        selections: [
          {
            alias:
              "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection",
            args: [
              {
                kind: "Variable",
                name: "is_chronological",
                variableName: "is_chronological",
              },
              { kind: "Variable", name: "media_id", variableName: "media_id" },
              {
                kind: "Variable",
                name: "parent_comment_id",
                variableName: "parent_comment_id",
              },
            ],
            concreteType: "XDTGetChildCommentsResponseConnection",
            kind: "LinkedField",
            name: "__PolarisPostComments__xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XDTGetChildCommentsResponseEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XDTCommentDict",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "pk",
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PolarisPostComment_comment",
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PolarisPostMobileComment_comment",
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PolarisCommentLikeButton_comment",
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PolarisPostCommentHeader_comment",
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XDTPageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_previous_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "start_cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostCommentAvatar_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisPostCommentAvatar_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "restricted_status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XDTUserDict",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_unpublished",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "profile_pic_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pk",
                storageKey: null,
              },
              action: "THROW",
              path: "user.pk",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostCommentContent_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisPostCommentContent_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "restricted_status",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_unpublished",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_verified",
                storageKey: null,
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "pk",
                  storageKey: null,
                },
                action: "THROW",
                path: "user.pk",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "user",
        },
        {
          alias: null,
          args: null,
          concreteType: "XDTCommentGiphyMediaInfo",
          kind: "LinkedField",
          name: "giphy_media_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XDTCommentGiphyMediaImages",
              kind: "LinkedField",
              name: "images",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTCommentGiphyMediaFixedHeightImages",
                  kind: "LinkedField",
                  name: "fixed_height",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "url",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisCommentText_comment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisInlineCommentText_comment",
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostCommentViewpoint_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PolarisPostCommentViewpoint_comment",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "restricted_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "parent_comment_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_covered",
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "XDTUserDict",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: a,
                  action: "THROW",
                  path: "user.pk",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "user",
          },
        ],
        type: "XDTCommentDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostComment_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PolarisPostComment_comment",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "comment_like_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "child_comment_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "restricted_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "parent_comment_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_translation",
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "XDTUserDict",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: a,
                  action: "THROW",
                  path: "user.pk",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "user.username",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_pic_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "fbid_v2",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "user",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisPostCommentAvatar_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisCommentLikeButton_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisPostChildComments_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisPostCommentHeader_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisPostCommentContent_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePolarisPostCommentState_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisCommentReplyButton_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisPostCommentViewpoint_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useShowCommentOptionsModal_comment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePolarisCommentLikedByList_comment",
          },
        ],
        type: "XDTCommentDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisCommentLikedByListDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6099929533467078",
        metadata: {},
        name: "PolarisCommentLikedByListDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "usePolarisCommentLikedByList_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "usePolarisCommentLikedByList_comment",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "comment_like_count",
            storageKey: null,
          },
        ],
        type: "XDTCommentDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "usePolarisApproveRestrictedCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "comment_id" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "comment_id",
                variableName: "comment_id",
              },
            ],
            concreteType: "XDTApproveRestrictedCommentResponse",
            kind: "LinkedField",
            name: "xdt_api__v1__restrict_action__approve_restricted_comment",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "usePolarisApproveRestrictedCommentMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "usePolarisApproveRestrictedCommentMutation",
          selections: b,
        },
        params: {
          id: "8884018028338896",
          metadata: {},
          name: "usePolarisApproveRestrictedCommentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "usePolarisPostCommentState_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "usePolarisPostCommentState_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "child_comment_count",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "parent_comment_id",
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "usePolarisPostDeleteCommentMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "comment_id" },
          { defaultValue: null, kind: "LocalArgument", name: "media_id" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "comment_id",
                variableName: "comment_id",
              },
              { kind: "Variable", name: "media_id", variableName: "media_id" },
            ],
            concreteType: "XDTEmptyRecord",
            kind: "LinkedField",
            name: "xdt_web__comments__media_id__delete_queryable__comment_id",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "usePolarisPostDeleteCommentMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "usePolarisPostDeleteCommentMutation",
          selections: b,
        },
        params: {
          id: "6384880928197056",
          metadata: {},
          name: "usePolarisPostDeleteCommentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useShowCommentOptionsModal_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useShowCommentOptionsModal_comment",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "XDTUserDict",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: a,
                  action: "THROW",
                  path: "user.pk",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "user.username",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_pic_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "fbid_v2",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "user",
          },
        ],
        type: "XDTCommentDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisCommentActionButton.react",
  ["BaseButton.react", "IGDSText.react", "PolarisUA", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        button: {
          userSelect: "x87ps6o",
          ":active_opacity": "x1d5wrs8",
          marginEnd: "xqmxbcd",
          $$css: !0,
        },
        mobileSpacing: {
          marginEnd: "x11i5rnm",
          marginStart: "x16n37ib",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.label;
      a = a.onClick;
      return h.jsx(c("BaseButton.react"), {
        onClick: a,
        xstyle: [i.button, d("PolarisUA").isMobile() && i.mobileSpacing],
        children: h.jsx(c("IGDSText.react"), {
          color: "secondaryText",
          size: "footnote",
          weight: "semibold",
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCommentReplyButton.react",
  [
    "CometRelay",
    "PolarisCommentActionButton.react",
    "PolarisCommentReplyButton_comment.graphql",
    "PolarisPendingCommentActions",
    "PolarisPostStrings",
    "PolarisReactRedux",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("PolarisCommentReplyButton_comment.graphql"));
    function a(a) {
      var b = a.commentFragment,
        e = a.mediaId,
        f = d("CometRelay").useFragment(j, b),
        g = d("PolarisReactRedux").useDispatch();
      a = function () {
        g(
          d("PolarisPendingCommentActions").changePendingComment(
            e,
            "@" + (f.user.username || "") + " ",
            f.pk,
            f.user.pk,
            f.user.username,
            f.parent_comment_id
          )
        );
      };
      return i.jsx(c("PolarisCommentActionButton.react"), {
        label: d("PolarisPostStrings").REPLY_TEXT,
        onClick: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PolarisCommentReplyButton = a;
  },
  98
);
__d(
  "PolarisCommentText.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisCommentText_comment.graphql",
    "PolarisTimestamp.react",
    "PolarisUserLinkWithHoverCard.react",
    "RelayHooks",
    "polarisGetIGFormattedText",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("PolarisCommentText_comment.graphql"));
    function a(a) {
      var b = a.comment,
        e = a.showTranslatedText,
        f = a.size;
      a = a.translatedText;
      b = d("RelayHooks").useFragment(j, b);
      var g = b.restricted_status === 1,
        h = function (a) {
          return a == null || a === ""
            ? null
            : i.jsx(c("IGDSText.react"), {
                children: c("polarisGetIGFormattedText")(a),
              });
        };
      e = e === !0 ? a : b.text;
      return i.jsx("div", {
        className: "" + (g ? " xbyyjgo" : ""),
        children: i.jsx(c("IGDSText.react"), {
          size: (a = f) != null ? a : "label",
          zeroMargin: !0,
          children: i.jsxs(c("IGDSBox.react"), {
            direction: "column",
            display: "flex",
            children: [
              i.jsxs(c("IGDSBox.react"), {
                direction: "row",
                display: "flex",
                children: [
                  i.jsx(c("PolarisUserLinkWithHoverCard.react"), {
                    color: "ig-link",
                    isVerified: b.user.is_verified === !0,
                    triggerAnalyticsContext: "post_commenter",
                    userId: b.user.pk,
                    username: (g = b.user.username) != null ? g : "",
                  }),
                  "\xa0",
                  b.created_at != null
                    ? i.jsx(c("IGDSText.react"), {
                        color: "secondaryText",
                        size: (a = f) != null ? a : "label",
                        zeroMargin: !0,
                        children: i.jsx(c("PolarisTimestamp.react"), {
                          className: "xsgj6o6",
                          value: Number(b.created_at),
                        }),
                      })
                    : null,
                ],
              }),
              h(e),
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCommentTranslationPrompt.next.react",
  [
    "fbt",
    "CometRelay",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisCommentActionButton.react",
    "PolarisCommentTranslationPromptQuery.graphql",
    "PolarisLogger",
    "PolarisMonitorErrors",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useState,
      l =
        i !== void 0
          ? i
          : (i = b("PolarisCommentTranslationPromptQuery.graphql"));
    function a(a) {
      var b = a.hasTranslation,
        e = a.id,
        f = a.isCaption,
        g = f === void 0 ? !1 : f,
        i = a.setShowTranslatedText,
        m = a.setTranslatedText;
      f = a.showTranslatedText;
      var n = a.translatedTextExists;
      a = k(!1);
      var o = a[0],
        p = a[1],
        q = d("CometRelay").useRelayEnvironment();
      a = function () {
        i(!1);
      };
      var r = function () {
        if (n) {
          i(!0);
          return;
        }
        p(!0);
        if (e == null) return;
        d("PolarisLogger").logAction("translateCommentAttempt");
        d("CometRelay")
          .fetchQuery(q, l, { comment_id: e, is_caption: g })
          .toPromise()
          .then(function (a) {
            a =
              a == null ? void 0 : a.xdt_api__v1__comment_translate.translation;
            a != null && (i(!0), m(a));
            p(!1);
            d("PolarisLogger").logAction("translateCommentSuccess");
          })
          ["catch"](function (a) {
            p(!1),
              d("PolarisMonitorErrors").logError(a),
              d("PolarisLogger").logAction("translateCommentFailure");
          });
      };
      if (e !== null && b !== !0) return null;
      if (o === !0)
        return j.jsx(c("IGDSBox.react"), {
          marginStart: d("PolarisUA").isMobile() ? 4 : 0,
          children: j.jsx(c("IGDSText.react").Body2Emphasized, {
            color: "secondaryText",
            children: h._("Loading..."),
          }),
        });
      return n != null && f
        ? j.jsx(c("PolarisCommentActionButton.react"), {
            label: h._("See original"),
            onClick: a,
          })
        : j.jsx(c("PolarisCommentActionButton.react"), {
            label: h._("See translation"),
            onClick: r,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisInlineCommentText.react",
  [
    "IGDSText.react",
    "PolarisInlineCommentText_comment.graphql",
    "PolarisUserLinkWithHoverCard.react",
    "RelayHooks",
    "polarisGetIGFormattedText",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("PolarisInlineCommentText_comment.graphql"));
    function a(a) {
      var b = a.comment,
        e = a.showTranslatedText,
        f = a.showVerifiedBadge,
        g = a.size;
      a = a.translatedText;
      b = d("RelayHooks").useFragment(j, b);
      var h = b.restricted_status === 1,
        k = function (a) {
          return a == null || a === ""
            ? void 0
            : c("polarisGetIGFormattedText")(a);
        };
      e = e === !0 ? a : b.text;
      return i.jsx("div", {
        className: "" + (h ? " xbyyjgo" : ""),
        children: i.jsxs(c("IGDSText.react"), {
          size: (a = g) != null ? a : "label",
          zeroMargin: !0,
          children: [
            i.jsx(c("PolarisUserLinkWithHoverCard.react"), {
              color: "ig-link",
              isVerified: f === !0 && b.user.is_verified === !0,
              triggerAnalyticsContext: "post_commenter",
              userId: b.user.pk,
              username: (h = b.user.username) != null ? h : "",
            }),
            "\xa0",
            k(e),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostChildComments.next",
  [
    "BaseButton.react",
    "CometPlaceholder.react",
    "CometRelay",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisGenericStrings",
    "PolarisPostChildCommentsQuery.graphql",
    "PolarisPostChildComments_comment.graphql",
    "PolarisPostChildComments_items_connection.graphql",
    "cr:3100",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = {
        viewRepliesLine: {
          width: "x17z2i9w",
          marginEnd: "xq8finb",
          borderBottom: "xb0nk2e",
          $$css: !0,
        },
        childContainer: { flexShrink: "x2lah0s", width: "xh8yej3", $$css: !0 },
        secondaryTextButton: {
          userSelect: "x87ps6o",
          ":active_opacity": "x1d5wrs8",
          $$css: !0,
        },
      },
      m =
        h !== void 0 ? h : (h = b("PolarisPostChildComments_comment.graphql")),
      n = i !== void 0 ? i : (i = b("PolarisPostChildCommentsQuery.graphql")),
      o =
        j !== void 0
          ? j
          : (j = b("PolarisPostChildComments_items_connection.graphql"));
    function p(a) {
      var e = a.childCommentsQuery,
        f = a.mediaId,
        g = a.mediaOwnerId;
      a = d("CometRelay").usePaginationFragment(o, e);
      e = a.data;
      var h = a.hasNext,
        i = a.isLoadingNext,
        j = a.loadNext,
        m = function () {
          j(5);
        };
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx("ul", {
            className: "x2lah0s xh8yej3",
            children:
              (a =
                e
                  .xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection
                  .edges) == null
                ? void 0
                : a.map(function (a) {
                    a = a.node;
                    return k.jsx(
                      b("cr:3100"),
                      { mediaId: f, mediaOwnerId: g, queryReference: a },
                      a.pk
                    );
                  }),
          }),
          i
            ? k.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                marginBottom: 3,
                marginTop: 3,
                children: k.jsx(c("IGDSSpinner.react"), { size: "small" }),
              })
            : null,
          h && !i
            ? k.jsx(c("BaseButton.react"), {
                onClick: function () {
                  return m();
                },
                xstyle: l.secondaryTextButton,
                children: k.jsxs(c("IGDSBox.react"), {
                  alignItems: "center",
                  direction: "row",
                  marginTop: 2,
                  children: [
                    k.jsx("div", { className: "x17z2i9w xq8finb xb0nk2e" }),
                    k.jsx(c("IGDSText.react"), {
                      color: "secondaryText",
                      size: "footnote",
                      children: d("PolarisGenericStrings")
                        .SHOW_MORE_REPLIES_TEXT,
                    }),
                  ],
                }),
              })
            : null,
        ],
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      var b = a.mediaId,
        c = a.mediaOwnerId;
      a = a.parentCommentQueryRef;
      a = d("CometRelay").useFragment(m, a);
      a = (a = a == null ? void 0 : a.pk) != null ? a : "0";
      a = d("CometRelay").useLazyLoadQuery(n, {
        media_id: b,
        parent_comment_id: a,
      });
      return k.jsx(p, { childCommentsQuery: a, mediaId: b, mediaOwnerId: c });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r(a) {
      a = a.children;
      return k.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        paddingY: 2,
        children: [
          k.jsx("div", { className: "x17z2i9w xq8finb xb0nk2e" }),
          k.jsx(c("IGDSText.react"), {
            color: "secondaryText",
            size: "footnote",
            weight: "semibold",
            children: a,
          }),
        ],
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.mediaId,
        e = a.mediaOwnerId,
        f = a.parentCommentQueryRef,
        g = a.setShowReplies;
      a = a.showReplies;
      var h = d("CometRelay").useFragment(m, f);
      return a
        ? k.jsxs(c("CometPlaceholder.react"), {
            fallback: k.jsxs(c("IGDSBox.react"), {
              direction: "row",
              children: [
                k.jsx(r, {
                  children: d("PolarisGenericStrings").VIEW_ALL_REPLIES_TEXT(
                    ((a = h.child_comment_count) == null
                      ? void 0
                      : a.toString()) || "0"
                  ),
                }),
                k.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  justifyContent: "center",
                  marginStart: 2,
                  children: k.jsx(c("IGDSSpinner.react"), { size: "small" }),
                }),
              ],
            }),
            children: [
              k.jsx(c("BaseButton.react"), {
                onClick: function () {
                  return g(!1);
                },
                xstyle: l.secondaryTextButton,
                children: k.jsx(r, {
                  children: d("PolarisGenericStrings").HIDE_ALL_REPLIES_TEXT,
                }),
              }),
              k.jsx(q, {
                mediaId: b,
                mediaOwnerId: e,
                parentCommentQueryRef: f,
              }),
            ],
          })
        : k.jsx(c("BaseButton.react"), {
            onClick: function () {
              return g(!0);
            },
            xstyle: l.secondaryTextButton,
            children: k.jsx(r, {
              children: d("PolarisGenericStrings").VIEW_ALL_REPLIES_TEXT(
                ((a = h.child_comment_count) == null ? void 0 : a.toString()) ||
                  "0"
              ),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostCommentAvatar.react",
  [
    "IGDSConstants",
    "PolarisPostCommentAvatar_comment.graphql",
    "PolarisUserAvatar.react",
    "PolarisUserHoverCard.react",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("PolarisPostCommentAvatar_comment.graphql"));
    function a(a) {
      a = a.comment;
      a = d("RelayHooks").useFragment(j, a);
      var b = a.user;
      if (!b) return null;
      a = a.restricted_status === 1;
      return i.jsx("div", {
        className: "" + (a ? " xbyyjgo" : ""),
        children: i.jsx(c("PolarisUserHoverCard.react"), {
          display: "block",
          isUserAvailable: !b.is_unpublished,
          triggerAnalyticsContext: "post_commenter_avatar",
          userId: b.pk,
          children: i.jsx(c("PolarisUserAvatar.react"), {
            profilePictureUrl: (a = b.profile_pic_url) != null ? a : "",
            size: c("IGDSConstants").AVATAR_SIZES.small,
            username: (a = b.username) != null ? a : "",
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostCommentContent.next",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisCommentText.react",
    "PolarisInlineCommentText.react",
    "PolarisPostCommentContent_comment.graphql",
    "PolarisPostGifComment.react",
    "PolarisPostStrings",
    "PolarisUserLinkWithHoverCard.react",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("PolarisPostCommentContent_comment.graphql"));
    function a(a) {
      var b,
        e = a.comment,
        f = a.isInlineComment,
        g = a.showRestrictedContent,
        h = a.showTranslatedText,
        k = a.showVerifiedBadge;
      a = a.translatedText;
      e = d("RelayHooks").useFragment(j, e);
      var l = e.restricted_status === 1,
        m = e.user;
      b =
        (b = e.giphy_media_info) == null
          ? void 0
          : (b = b.images) == null
          ? void 0
          : (b = b.fixed_height) == null
          ? void 0
          : b.url;
      if (l && !g)
        return i.jsx(c("IGDSBox.react"), {
          marginBottom: 1,
          children: i.jsx(c("IGDSText.react").Body, {
            color: "tertiaryText",
            children: d("PolarisPostStrings").RESTRICTED_ACCOUNT_HEADER_TEXT,
          }),
        });
      else if ((m == null ? void 0 : m.is_unpublished) === !0) return null;
      if (b != null) {
        return i.jsxs(c("IGDSBox.react"), {
          marginEnd: 2,
          children: [
            i.jsx(c("PolarisUserLinkWithHoverCard.react"), {
              color: "ig-link",
              isVerified: k === !0 && m.is_verified === !0,
              triggerAnalyticsContext: "post_commenter",
              userId: m.pk,
              username: (l = m.username) != null ? l : "",
            }),
            i.jsx(c("PolarisPostGifComment.react"), { gifSrc: b }),
          ],
        });
      }
      return f
        ? i.jsx(c("PolarisInlineCommentText.react"), {
            comment: e,
            showTranslatedText: h,
            showVerifiedBadge: k,
            size: "body",
            translatedText: a,
          })
        : i.jsx(c("PolarisCommentText.react"), {
            comment: e,
            showTranslatedText: h,
            size: "body",
            translatedText: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostCommentOptionsButton.react",
  [
    "IGDSBox.react",
    "IGDSMoreHorizontalPanoOutlineIcon",
    "PolarisIGCoreSVGIconButton",
    "PolarisPostStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.onClick;
      return h.jsx(c("PolarisIGCoreSVGIconButton"), {
        onClick: a,
        children: h.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          height: 24,
          justifyContent: "center",
          position: "relative",
          width: 24,
          children: h.jsx(c("IGDSMoreHorizontalPanoOutlineIcon"), {
            alt: d("PolarisPostStrings").COMMENT_OPTIONS_ALT_TEXT,
            color: "ig-secondary-text",
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostCommentViewpoint.react",
  [
    "CometRelay",
    "PolarisEngagementLogger",
    "PolarisIgWellbeingRestrictManageCommentFalcoEvent",
    "PolarisPostCommentViewpoint_comment.graphql",
    "PolarisPostDetailsSectionProvider.react",
    "PolarisViewpointReact.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k =
        h !== void 0
          ? h
          : (h = b("PolarisPostCommentViewpoint_comment.graphql"));
    function a(a) {
      var b = a.children,
        e = a.mediaId,
        f = a.mediaOwnerId;
      a = a.queryReference;
      var g = d("CometRelay").useFragment(k, a),
        h = d(
          "PolarisPostDetailsSectionProvider.react"
        ).usePolarisPostDetailsSectionProvider(),
        l = g.parent_comment_id != null ? g.parent_comment_id : g.pk,
        m = g.restricted_status === 1;
      a = j(
        function (a) {
          switch (a.state) {
            case "entered":
              d("PolarisEngagementLogger").logCommentImpression({
                commentId: g.pk,
                commentAuthorId: g.user.pk,
                commentThreadId: l,
                containerModule: h,
                isCovered: g.is_covered === !0,
                mediaId: e,
                mediaAuthorId: f,
                mediaType: 2,
              });
              m &&
                c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
                  action: "impression",
                  actorIgUserid: g.user.pk,
                  commentId: g.pk,
                  commentThreadId: l,
                  parentMediaId: e,
                  step: "pending_comment",
                });
              return;
          }
        },
        [h, g.is_covered, g.pk, g.user.pk, l, m, e, f]
      );
      return i.jsx(d("PolarisViewpointReact.react").Viewpoint, {
        action: a,
        id: "comment_viewpoint_" + g.pk,
        children: function (a) {
          return b(a);
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisApproveRestrictedComment",
  ["CometRelay", "react", "usePolarisApproveRestrictedCommentMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j =
        h !== void 0
          ? h
          : (h = b("usePolarisApproveRestrictedCommentMutation.graphql"));
    function a(a) {
      var b = d("CometRelay").useMutation(j),
        c = b[0];
      return i(
        function () {
          var b = function (b) {
            b = b.get("XDTCommentDict:" + a);
            b == null ? void 0 : b.setValue(0, "restricted_status");
          };
          c({ variables: { comment_id: a }, optimisticUpdater: b, updater: b });
        },
        [c, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCommentLikedByListDialogRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "PolarisCommentLikedByListDialogQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            polarisCommentLikedByListDialogQuery: {
              options: {},
              parameters: c("PolarisCommentLikedByListDialogQuery$Parameters"),
              variables: { comment_id: a.routeProps.commentId },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PolarisCommentLikedByListDialogRoot.react"
      ).__setRef("PolarisCommentLikedByListDialogRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisCommentLikedByList",
  [
    "CometRelay",
    "PolarisCommentLikedByListDialogRoot.entrypoint",
    "PolarisLikedByListDialogPlaceholder.react",
    "PolarisReactRedux",
    "polarisUserSelectors",
    "react",
    "useIGDSEntryPointDialog",
    "usePolarisCommentLikedByList_comment.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k =
        h !== void 0
          ? h
          : (h = b("usePolarisCommentLikedByList_comment.graphql"));
    function a(a) {
      var b = d("CometRelay").useFragment(k, a);
      a = d("PolarisReactRedux").useSelector(
        d("polarisUserSelectors").getViewer
      );
      var e =
        (a == null ? void 0 : a.id) ===
        (b == null ? void 0 : (a = b.user) == null ? void 0 : a.pk);
      a = c("useIGDSEntryPointDialog")(
        c("PolarisCommentLikedByListDialogRoot.entrypoint"),
        { routeParams: {}, routeProps: { commentId: b.pk } },
        "button",
        function (a) {
          return i.jsx(c("PolarisLikedByListDialogPlaceholder.react"), {
            onClose: a,
          });
        }
      );
      var f = a[0];
      return j(
        function () {
          var a;
          f({
            isOwnerTheViewer: e,
            likeAndViewCountsDisabled: !1,
            likeCount: (a = b.comment_like_count) != null ? a : void 0,
            comment_id: b.pk,
            ownerUsername:
              (a =
                b == null
                  ? void 0
                  : (a = b.user) == null
                  ? void 0
                  : a.username) != null
                ? a
                : "",
            productType: void 0,
            viewCount: 0,
          });
        },
        [
          b.comment_like_count,
          b.pk,
          b == null ? void 0 : (a = b.user) == null ? void 0 : a.username,
          f,
          e,
        ]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisPostCommentState",
  ["CometRelay", "react", "usePolarisPostCommentState_comment.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useState,
      j =
        h !== void 0
          ? h
          : (h = b("usePolarisPostCommentState_comment.graphql"));
    function a(a) {
      var b = i(!1),
        c = b[0];
      b = b[1];
      var e = i(null),
        f = e[0];
      e = e[1];
      var g = i(!1),
        h = g[0];
      g = g[1];
      a = d("CometRelay").useFragment(j, a);
      var k = a.parent_comment_id != null;
      a = a.child_comment_count != null && a.child_comment_count !== 0;
      var l = !k && a;
      return {
        showReplies: c,
        setShowReplies: b,
        isChildComment: k,
        hasChildComment: a,
        isParentComment: l,
        translatedText: f,
        setTranslatedText: e,
        showTranslatedText: h,
        setShowTranslatedText: g,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisPostDeleteComment",
  [
    "CometRelay",
    "PolarisCreationConstants",
    "PolarisLogger",
    "react",
    "useIGDSToaster",
    "usePolarisPostDeleteCommentMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j =
        h !== void 0
          ? h
          : (h = b("usePolarisPostDeleteCommentMutation.graphql"));
    function a(a, b, e) {
      var f = d("CometRelay").useMutation(j),
        g = f[0];
      f = c("useIGDSToaster")();
      var h = f.add,
        k = f.clear;
      return i(
        function () {
          var c = function (c) {
            d("PolarisLogger").logAction("deleteCommentAttempt");
            var f = "XDTCommentDict:" + a;
            c = c.getRoot();
            c = d("CometRelay").ConnectionHandler.getConnection(
              c,
              "PolarisPostComments__xdt_api__v1__media__media_id__comments__connection",
              { data: {}, media_id: b }
            );
            c != null
              ? (d("CometRelay").ConnectionHandler.deleteNode(c, f),
                d("PolarisLogger").logAction("deleteCommentSuccess"),
                d("PolarisLogger").logAction("commentDelete", { source: e }))
              : (d("PolarisLogger").logAction("deleteCommentFailure"),
                h(
                  { message: "Could not delete comment" },
                  {
                    duration: d("PolarisCreationConstants").TOAST_TIMEOUT,
                    onAfterHide: k(),
                  }
                ));
          };
          g({
            variables: { comment_id: a, media_id: b },
            optimisticUpdater: c,
            updater: c,
          });
        },
        [e, a, b, g, h, k]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useShowCommentOptionsModal",
  [
    "CometRelay",
    "IGDSDialogPlaceholder.react",
    "JSResourceForInteraction",
    "polarisUserSelectors",
    "react",
    "useIGDSLazyDialog",
    "usePolarisPostDeleteComment",
    "usePolarisSelector",
    "useShowCommentOptionsModal_comment.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k = c("JSResourceForInteraction")(
        "PolarisPostCommentOptions.next"
      ).__setRef("useShowCommentOptionsModal"),
      l =
        h !== void 0
          ? h
          : (h = b("useShowCommentOptionsModal_comment.graphql"));
    function a(a) {
      var b = a.mediaId,
        e = a.mediaOwnerId;
      a = a.queryReference;
      var f = d("CometRelay").useFragment(l, a),
        g = c("usePolarisSelector")(d("polarisUserSelectors").getViewer);
      a = c("useIGDSLazyDialog")(k, function (a) {
        return i.jsx(c("IGDSDialogPlaceholder.react"), {
          onClose: a,
          size: "default",
        });
      });
      var h = a[0];
      a[1];
      var m = c("usePolarisPostDeleteComment")(f.pk, b, "reelsTab");
      return j(
        function () {
          var a;
          if (
            f.user != null &&
            ((a = f.user) == null ? void 0 : a.profile_pic_url) != null &&
            ((a = f.user) == null ? void 0 : a.fbid_v2) != null
          ) {
            h({
              commentId: f.pk,
              commentOwnerId: (a = f.user) == null ? void 0 : a.pk,
              commentOwnerFbidV2: (a = f.user) == null ? void 0 : a.fbid_v2,
              commentOwnerUsername: (a = f.user) == null ? void 0 : a.username,
              profilePicUrl: (a = f.user) == null ? void 0 : a.profile_pic_url,
              onDelete: m,
              mediaOwnerId: e,
              canDeleteComment:
                (g == null ? void 0 : g.id) ===
                ((a = f.user) == null ? void 0 : a.pk),
            });
          }
        },
        [f.user, f.pk, h, m, e, g == null ? void 0 : g.id]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostComment.next",
  [
    "BaseButton.react",
    "CometRelay",
    "IGDSBox.react",
    "IGDSDialogPlaceholder.react",
    "IGDSText.react",
    "JSResourceForInteraction",
    "PolarisAsyncCommentLikedByListContainer",
    "PolarisBigNumber.react",
    "PolarisCommentActionButton.react",
    "PolarisCommentLikeButton.next",
    "PolarisCommentLikeListsActions",
    "PolarisCommentReplyButton.react",
    "PolarisCommentTranslationPrompt.next.react",
    "PolarisIgWellbeingRestrictManageCommentFalcoEvent",
    "PolarisLikedByListVariant",
    "PolarisPostChildComments.next",
    "PolarisPostCommentAvatar.react",
    "PolarisPostCommentContent.next",
    "PolarisPostCommentOptionsButton.react",
    "PolarisPostCommentViewpoint.react",
    "PolarisPostComment_comment.graphql",
    "PolarisPostDetailsSectionProvider.react",
    "PolarisPostStrings",
    "PolarisReactRedux",
    "gkx",
    "polarisUserSelectors",
    "react",
    "useIGDSLazyDialog",
    "usePolarisApproveRestrictedComment",
    "usePolarisCommentLikedByList",
    "usePolarisPostCommentState",
    "usePolarisPostDeleteComment",
    "usePolarisSelector",
    "usePrevious",
    "useShowCommentOptionsModal",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useState,
      m = h !== void 0 ? h : (h = b("PolarisPostComment_comment.graphql")),
      n = {
        likeButton: { paddingBottom: "xjkvuk6", $$css: !0 },
        avatar: { marginEnd: "x1emribx", $$css: !0 },
        childCommentsContainer: { marginStart: "x540dpk", $$css: !0 },
      },
      o = c("JSResourceForInteraction")(
        "PolarisApproveCommentDialog.next"
      ).__setRef("PolarisPostComment.next"),
      p = c("JSResourceForInteraction")(
        "PolarisDeleteCommentModal.next"
      ).__setRef("PolarisPostComment.next");
    function a(a) {
      var b = a.mediaId,
        e = a.mediaOwnerId;
      a = a.queryReference;
      var f = d("CometRelay").useFragment(m, a);
      a = l(!1);
      var g = a[0],
        h = a[1];
      a = c("usePolarisPostCommentState")(f);
      var r = a.isParentComment,
        s = a.setShowReplies,
        t = a.setShowTranslatedText,
        u = a.setTranslatedText,
        v = a.showReplies,
        w = a.showTranslatedText,
        x = a.translatedText,
        y = c("usePolarisCommentLikedByList")(f),
        z = function () {
          c("gkx")("2375") ? y() : h(!0);
        },
        A = f.restricted_status === 1;
      a = l(!1);
      var B = a[0],
        C = a[1];
      a = l(!1);
      var D = a[0],
        E = a[1],
        F = A && !B,
        G = A && B,
        H = f.parent_comment_id != null ? f.parent_comment_id : f.pk,
        I = c("usePolarisSelector")(d("polarisUserSelectors").getViewer),
        J = d(
          "PolarisPostDetailsSectionProvider.react"
        ).usePolarisPostDetailsSectionProvider(),
        K = c("usePolarisPostDeleteComment")(f.pk, b, "reelsTab");
      a = c("useIGDSLazyDialog")(o, function (a) {
        return i.jsx(c("IGDSDialogPlaceholder.react"), {
          onClose: a,
          size: "default",
        });
      });
      var L = a[0];
      a[1];
      a = c("useIGDSLazyDialog")(p, function (a) {
        return i.jsx(c("IGDSDialogPlaceholder.react"), {
          onClose: a,
          size: "default",
        });
      });
      var M = a[0];
      a[1];
      var N = c("usePolarisApproveRestrictedComment")(f.pk),
        O = j(
          function () {
            var a;
            a = (a = f.user) == null ? void 0 : a.username;
            a != null &&
              L({
                commentId: f.pk,
                commentThreadId: H,
                commentOwnerId: f.user.pk,
                commentOwnerUsername: a,
                onApproveComment: N,
                mediaId: b,
              });
          },
          [L, f.pk, f.user.pk, b, f.user.username, H, N]
        ),
        P = j(
          function () {
            M({ analyticsContext: J, onDelete: K });
          },
          [M, J, K]
        ),
        Q = function () {
          c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
            action: "click",
            actorIgUserid: f.user.pk,
            commentId: f.pk,
            commentThreadId: H,
            parentMediaId: b,
            step: "pending_comment_see_hidden",
          }),
            C(!0);
        },
        R = function () {
          c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
            action: "click",
            actorIgUserid: f.user.pk,
            commentId: f.pk,
            commentThreadId: H,
            parentMediaId: b,
            step: "pending_comment_approve",
          }),
            O();
        },
        S = c("useShowCommentOptionsModal")({
          queryReference: f,
          mediaId: b,
          mediaOwnerId: e,
        }),
        T = function () {
          c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
            action: "click",
            actorIgUserid: f.user.pk,
            commentId: f.pk,
            commentThreadId: H,
            parentMediaId: b,
            step: B
              ? "pending_comment_delete"
              : "pending_comment_delete_hidden",
          }),
            P();
        },
        U = c("usePrevious")(f.child_comment_count);
      k(
        function () {
          U != null && f.child_comment_count === U + 1 && v === !1 && s(!0);
        },
        [f.child_comment_count, U, v, s]
      );
      return i.jsxs(i.Fragment, {
        children: [
          f.pk != null && g === !0
            ? i.jsx(q, {
                commentId: f.pk,
                onClose: function () {
                  return h(!1);
                },
              })
            : null,
          i.jsx(c("PolarisPostCommentViewpoint.react"), {
            mediaId: b,
            mediaOwnerId: e,
            queryReference: f,
            children: function (a) {
              return i.jsx("div", {
                onMouseEnter: function () {
                  return E(!0);
                },
                onMouseLeave: function () {
                  return E(!1);
                },
                ref: a,
                children: i.jsxs(c("IGDSBox.react"), {
                  direction: "row",
                  display: "flex",
                  paddingY: 3,
                  children: [
                    i.jsx("div", {
                      className: "x1emribx",
                      children: i.jsx(c("PolarisPostCommentAvatar.react"), {
                        comment: f,
                      }),
                    }),
                    i.jsxs(c("IGDSBox.react"), {
                      direction: "row",
                      display: "flex",
                      flex: "grow",
                      children: [
                        i.jsxs(c("IGDSBox.react"), {
                          direction: "column",
                          display: "flex",
                          flex: "grow",
                          children: [
                            i.jsx(c("PolarisPostCommentContent.next"), {
                              comment: f,
                              isInlineComment: !1,
                              showRestrictedContent: B,
                              showTranslatedText: w,
                              showVerifiedBadge: !0,
                              translatedText: x,
                            }),
                            i.jsxs(c("IGDSBox.react"), {
                              alignItems: "center",
                              direction: "row",
                              display: "flex",
                              height: 16,
                              marginTop: 2,
                              children: [
                                !A &&
                                  i.jsx(
                                    d("PolarisCommentReplyButton.react")
                                      .PolarisCommentReplyButton,
                                    { commentFragment: f, mediaId: b }
                                  ),
                                i.jsx(
                                  c(
                                    "PolarisCommentTranslationPrompt.next.react"
                                  ),
                                  {
                                    hasTranslation: f.has_translation,
                                    id: f.pk,
                                    setShowTranslatedText: t,
                                    setTranslatedText: u,
                                    showTranslatedText: w,
                                    translatedTextExists: x != null,
                                  }
                                ),
                                !A &&
                                  (I == null ? void 0 : I.id) != null &&
                                  D &&
                                  i.jsx(
                                    c("PolarisPostCommentOptionsButton.react"),
                                    { onClick: S }
                                  ),
                                F &&
                                  i.jsx(c("PolarisCommentActionButton.react"), {
                                    label:
                                      d("PolarisPostStrings")
                                        .RESTRICT_SEE_COMMENT_TEXT,
                                    onClick: Q,
                                  }),
                                G &&
                                  i.jsx(c("PolarisCommentActionButton.react"), {
                                    label:
                                      d("PolarisPostStrings")
                                        .APPROVE_COMMENT_CTA,
                                    onClick: R,
                                  }),
                                A &&
                                  i.jsx(c("PolarisCommentActionButton.react"), {
                                    label:
                                      d("PolarisPostStrings")
                                        .RESTRICT_DELETE_COMMENT_TEXT,
                                    onClick: T,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        i.jsxs(c("IGDSBox.react"), {
                          alignItems: "center",
                          direction: "column",
                          display: "flex",
                          justifyContent: "center",
                          children: [
                            i.jsx(c("PolarisCommentLikeButton.next"), {
                              color: "ig-secondary-icon",
                              isLarge: !1,
                              queryReference: f,
                              size: 16,
                              xstyle: n.likeButton,
                            }),
                            f.comment_like_count != null &&
                            f.comment_like_count > 0
                              ? i.jsx(c("BaseButton.react"), {
                                  onClick: z,
                                  children: i.jsx(c("IGDSText.react"), {
                                    color: "secondaryText",
                                    size: "footnote",
                                    textAlign: "center",
                                    weight: "medium",
                                    zeroMargin: !0,
                                    children: i.jsx(
                                      c("PolarisBigNumber.react"),
                                      {
                                        shortenNumber: !0,
                                        value:
                                          (a = f.comment_like_count) != null
                                            ? a
                                            : 0,
                                      }
                                    ),
                                  }),
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
          }),
          r
            ? i.jsx(c("IGDSBox.react"), {
                xstyle: n.childCommentsContainer,
                children: i.jsx(c("PolarisPostChildComments.next"), {
                  mediaId: b,
                  mediaOwnerId: e,
                  parentCommentQueryRef: f,
                  setShowReplies: s,
                  showReplies: v,
                }),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function q(a) {
      var b = a.commentId;
      a = a.onClose;
      var e = d("PolarisReactRedux").useDispatch();
      k(
        function () {
          e(d("PolarisCommentLikeListsActions").requestCommentLikes(b));
        },
        [e, b]
      );
      return i.jsx(c("PolarisAsyncCommentLikedByListContainer"), {
        commentId: b,
        display: c("PolarisLikedByListVariant").Modal,
        onClose: a,
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisPostCommentsPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "after" },
          { defaultValue: null, kind: "LocalArgument", name: "before" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
          { defaultValue: null, kind: "LocalArgument", name: "last" },
          { defaultValue: null, kind: "LocalArgument", name: "media_id" },
        ],
        b = [
          { kind: "Variable", name: "after", variableName: "after" },
          { kind: "Variable", name: "before", variableName: "before" },
          { kind: "Literal", name: "data", value: {} },
          { kind: "Variable", name: "first", variableName: "first" },
          { kind: "Variable", name: "last", variableName: "last" },
          { kind: "Variable", name: "media_id", variableName: "media_id" },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PolarisPostCommentsPaginationQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "PolarisPostAllCommentsFragment_items_connection",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PolarisPostCommentsPaginationQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "XDTGetCommentsResponseConnection",
              kind: "LinkedField",
              name: "xdt_api__v1__media__media_id__comments__connection",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTGetCommentsResponseEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XDTCommentDict",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        c,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "comment_like_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "child_comment_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "restricted_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "parent_comment_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_translation",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTUserDict",
                          kind: "LinkedField",
                          name: "user",
                          plural: !1,
                          selections: [
                            c,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "username",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "profile_pic_url",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "fbid_v2",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "id",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_unpublished",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_verified",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_liked_comment",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTCommentGiphyMediaInfo",
                          kind: "LinkedField",
                          name: "giphy_media_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XDTCommentGiphyMediaImages",
                              kind: "LinkedField",
                              name: "images",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XDTCommentGiphyMediaFixedHeightImages",
                                  kind: "LinkedField",
                                  name: "fixed_height",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "url",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "text",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "created_at",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_covered",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTPageInfo",
                  kind: "LinkedField",
                  name: "page_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "end_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_next_page",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "start_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_previous_page",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: b,
              filters: ["data", "media_id"],
              handle: "connection",
              key: "PolarisPostComments__xdt_api__v1__media__media_id__comments__connection",
              kind: "LinkedHandle",
              name: "xdt_api__v1__media__media_id__comments__connection",
            },
          ],
        },
        params: {
          id: "6145647305502374",
          metadata: {},
          name: "PolarisPostCommentsPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostAllCommentsFragment_items_connection.graphql",
  ["PolarisPostCommentsPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["xdt_api__v1__media__media_id__comments__connection"];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "after" },
          { kind: "RootArgument", name: "before" },
          { kind: "RootArgument", name: "first" },
          { kind: "RootArgument", name: "last" },
          { kind: "RootArgument", name: "media_id" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: null, cursor: null, direction: "bidirectional", path: a },
          ],
          refetch: {
            connection: {
              forward: { count: "first", cursor: "after" },
              backward: { count: "last", cursor: "before" },
              path: a,
            },
            fragmentPathInResult: [],
            operation: b("PolarisPostCommentsPaginationQuery.graphql"),
          },
        },
        name: "PolarisPostAllCommentsFragment_items_connection",
        selections: [
          {
            alias: "xdt_api__v1__media__media_id__comments__connection",
            args: [
              { kind: "Literal", name: "data", value: {} },
              { kind: "Variable", name: "media_id", variableName: "media_id" },
            ],
            concreteType: "XDTGetCommentsResponseConnection",
            kind: "LinkedField",
            name: "__PolarisPostComments__xdt_api__v1__media__media_id__comments__connection_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XDTGetCommentsResponseEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XDTCommentDict",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "pk",
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PolarisPostComment_comment",
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PolarisPostMobileComment_comment",
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XDTPageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "start_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_previous_page",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisPostCommentsContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "after" },
        b = { defaultValue: null, kind: "LocalArgument", name: "before" },
        c = { defaultValue: null, kind: "LocalArgument", name: "first" },
        d = { defaultValue: null, kind: "LocalArgument", name: "last" },
        e = { defaultValue: null, kind: "LocalArgument", name: "media_id" },
        f = [
          { kind: "Variable", name: "after", variableName: "after" },
          { kind: "Variable", name: "before", variableName: "before" },
          { kind: "Literal", name: "data", value: {} },
          { kind: "Variable", name: "first", variableName: "first" },
          { kind: "Variable", name: "last", variableName: "last" },
          { kind: "Variable", name: "media_id", variableName: "media_id" },
        ],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "PolarisPostCommentsContainerQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "PolarisPostAllCommentsFragment_items_connection",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, b, e, c, d],
          kind: "Operation",
          name: "PolarisPostCommentsContainerQuery",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "XDTGetCommentsResponseConnection",
              kind: "LinkedField",
              name: "xdt_api__v1__media__media_id__comments__connection",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTGetCommentsResponseEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XDTCommentDict",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        g,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "comment_like_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "child_comment_count",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "restricted_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "parent_comment_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_translation",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTUserDict",
                          kind: "LinkedField",
                          name: "user",
                          plural: !1,
                          selections: [
                            g,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "username",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "profile_pic_url",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "fbid_v2",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "id",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_unpublished",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_verified",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_liked_comment",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XDTCommentGiphyMediaInfo",
                          kind: "LinkedField",
                          name: "giphy_media_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XDTCommentGiphyMediaImages",
                              kind: "LinkedField",
                              name: "images",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XDTCommentGiphyMediaFixedHeightImages",
                                  kind: "LinkedField",
                                  name: "fixed_height",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "url",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "text",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "created_at",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_covered",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTPageInfo",
                  kind: "LinkedField",
                  name: "page_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "end_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_next_page",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "start_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_previous_page",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: f,
              filters: ["data", "media_id"],
              handle: "connection",
              key: "PolarisPostComments__xdt_api__v1__media__media_id__comments__connection",
              kind: "LinkedHandle",
              name: "xdt_api__v1__media__media_id__comments__connection",
            },
          ],
        },
        params: {
          id: "5856771364376701",
          metadata: {},
          name: "PolarisPostCommentsContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "IGDSInfiniteScrollTrigger.react",
  ["react", "useAfterPaint", "useVisibilityObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useRef;
    function a(a) {
      var b = a.children,
        d = a["data-testid"],
        e = a.hasMore,
        f = a.isLoading,
        g = a.onLoadMore;
      d = a.rootMargin;
      a = d === void 0 ? 0 : d;
      var k = j(!1);
      d = i(
        function () {
          e && !f && k.current && g();
        },
        [e, f, g]
      );
      c("useAfterPaint")(d);
      d = i(
        function () {
          var a = k.current;
          k.current = !0;
          !a && e && !f && g();
        },
        [e, f, g]
      );
      var l = i(function () {
        k.current = !1;
      }, []);
      l = c("useVisibilityObserver")({
        onHidden: l,
        onVisible: d,
        options: { rootMargin: a },
      });
      return e || f
        ? h.jsx("div", { "data-testid": void 0, ref: l, children: b })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostAllComments.react",
  [
    "BaseButton.react",
    "CometRelay",
    "IGDSBox.react",
    "IGDSInfiniteScrollTrigger.react",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisGenericStrings",
    "PolarisLoggerUtils",
    "PolarisMobileSponsoredPersistentCTA.react",
    "PolarisNoCommentsPlaceholder.react",
    "PolarisPostAllCommentsFragment_items_connection.graphql",
    "PolarisPostUtils",
    "cr:3100",
    "polarisAdsSelectors",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 80,
      k = { persistentCTAPadding: { paddingBottom: "xo5ses6", $$css: !0 } },
      l =
        h !== void 0
          ? h
          : (h = b("PolarisPostAllCommentsFragment_items_connection.graphql"));
    function a(a) {
      var e = d("CometRelay").usePaginationFragment(l, a.paginationQuery),
        f = e.data,
        g = e.hasNext,
        h = e.isLoadingNext,
        o = e.loadNext;
      e = function () {
        o(10);
      };
      e = { handleLoadNext: e, isLoadingNext: h, hasNext: g };
      h =
        f.xdt_api__v1__media__media_id__comments__connection.edges != null &&
        f.xdt_api__v1__media__media_id__comments__connection.edges.length === 0;
      g = d("PolarisLoggerUtils").getFormattedMediaID(
        a.mediaId,
        a.mediaOwnerId
      );
      var p = d("polarisAdsSelectors").useFeedAdInfo(a.mediaId, function (a) {
        return a;
      });
      p = (p = p == null ? void 0 : p.tracking_token) != null ? p : "";
      return h
        ? i.jsx(c("PolarisNoCommentsPlaceholder.react"), {})
        : i.jsxs("div", {
            className: c("stylex")(
              a.xStyle,
              a.enablePersistentCta === !0 && k.persistentCTAPadding
            ),
            "data-testid": void 0,
            children: [
              a.postCaptionComponent != null && a.postCaptionComponent,
              (h =
                f.xdt_api__v1__media__media_id__comments__connection.edges) ==
              null
                ? void 0
                : h.map(function (c) {
                    c = c.node;
                    return i.jsx(
                      b("cr:3100"),
                      {
                        mediaId: a.mediaId,
                        mediaOwnerId: a.mediaOwnerId,
                        queryReference: c,
                      },
                      c.pk
                    );
                  }),
              a.enablePersistentCta === !0
                ? i.jsx(c("PolarisMobileSponsoredPersistentCTA.react"), {
                    bottomOffset: j,
                    ctaAdditionalAnimation:
                      d("PolarisPostUtils").PostFooterCTAAnimationStyle
                        .SLIDE_UP,
                    mpk: g,
                    trackingToken: p,
                  })
                : null,
              a.shouldUseInfiniteScroll
                ? i.jsx(m, babelHelpers["extends"]({}, e))
                : i.jsx(n, babelHelpers["extends"]({}, e)),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.handleLoadNext,
        d = a.hasNext;
      a = a.isLoadingNext;
      return i.jsx(c("IGDSInfiniteScrollTrigger.react"), {
        "data-testid": void 0,
        hasMore: d,
        isLoading: a,
        onLoadMore: b,
        children: i.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          "data-testid": void 0,
          height: "42px",
          marginBottom: 3,
          marginTop: 3,
          children: i.jsx(c("IGDSSpinner.react"), {}),
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.handleLoadNext,
        e = a.hasNext;
      a = a.isLoadingNext;
      if (a)
        return i.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          "data-testid": void 0,
          height: "42px",
          marginBottom: 3,
          marginTop: 3,
          children: i.jsx(c("IGDSSpinner.react"), {}),
        });
      if (e)
        return i.jsx(c("IGDSBox.react"), {
          alignItems: "start",
          height: "42px",
          marginBottom: 4,
          marginTop: 4,
          children: i.jsx(c("BaseButton.react"), {
            onClick: b,
            children: i.jsx(c("IGDSText.react"), {
              color: "secondaryText",
              children: d("PolarisGenericStrings").VIEW_MORE_COMMENTS_TEXT,
            }),
          }),
        });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostCommentsContainer.react",
  [
    "PolarisPostAllComments.react",
    "PolarisPostCommentsContainerQuery.graphql",
    "RelayHooks",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("PolarisPostCommentsContainerQuery.graphql"));
    function a(a) {
      var b = a.enablePersistentCta,
        e = a.mediaId,
        f = a.ownerId,
        g = a.postCaptionComponent;
      g = g === void 0 ? null : g;
      a = a.xStyle;
      var h = d("RelayHooks").useLazyLoadQuery(j, { media_id: e }),
        k = c("gkx")("3644") === !0;
      return i.jsx(c("PolarisPostAllComments.react"), {
        enablePersistentCta: b,
        mediaId: e,
        mediaOwnerId: f,
        paginationQuery: h,
        postCaptionComponent: g,
        shouldUseInfiniteScroll: k,
        xStyle: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsDesktopCommentsDialog.react",
  [
    "CometPlaceholder.react",
    "IGDSBox.react",
    "IGDSDialog.react",
    "IGDSDialogHeader.react",
    "IGDSText.react",
    "PolarisGenericStrings",
    "PolarisPendingCommentActions",
    "PolarisPostCommentInputReplyingToBar.react",
    "PolarisPostCommentInputRevampedOrLexical.react",
    "PolarisPostCommentsContainer.react",
    "PolarisPostCommentsContainerPlaceholder.react",
    "PolarisPostDetailsSectionProvider.react",
    "PolarisReactRedux",
    "react",
    "usePolarisSelector",
    "usePolarisViewer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        innerContent: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          width: "xvr7zsw",
          maxWidth: "xrlsmeg",
          $$css: !0,
        },
        commentContainer: {
          width: "xh8yej3",
          maxWidth: "x193iq5w",
          paddingTop: "x1p5oq8j",
          $$css: !0,
        },
        footer: {
          flexBasis: "x1ho3rtd",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          paddingTop: "x9orja2",
          paddingEnd: "xqmdsaz",
          paddingBottom: "xbaz6xv",
          paddingStart: "x1xfsgkm",
          boxSizing: "x9f619",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.props;
      var b = a.adInfo,
        e = a.commentsDisabled,
        f = a.isVideo,
        g = a.mediaId,
        j = a.onClose;
      a = a.ownerId;
      var k = c("usePolarisViewer")(),
        l = d("PolarisReactRedux").useDispatch(),
        m = c("usePolarisSelector")(function (a) {
          return (a = a.pendingComments.get(g)) == null
            ? void 0
            : a.repliedToUsername;
        }),
        n = function () {
          l(d("PolarisPendingCommentActions").clearPendingComment(g));
        };
      return h.jsx(
        d("PolarisPostDetailsSectionProvider.react")
          .PolarisPostDetailsSectionProvider,
        {
          value: "reelsTab",
          children: h.jsxs(c("IGDSDialog.react"), {
            fixedHeight: !0,
            fixedWidth: !0,
            innerContentXStyle: i.innerContent,
            onClose: j,
            size: "extraLarge",
            children: [
              h.jsx(c("IGDSDialogHeader.react"), {
                onClose: j,
                children: d("PolarisGenericStrings").COMMENTS_TEXT,
              }),
              h.jsx(c("IGDSBox.react"), {
                flex: "grow",
                overflow: "auto",
                paddingX: 8,
                children: h.jsx(c("CometPlaceholder.react"), {
                  fallback: h.jsx(
                    c("PolarisPostCommentsContainerPlaceholder.react"),
                    { xStyle: i.commentContainer }
                  ),
                  children: h.jsx(c("PolarisPostCommentsContainer.react"), {
                    mediaId: g,
                    ownerId: a,
                    xStyle: i.commentContainer,
                  }),
                }),
              }),
              m != null
                ? h.jsx(c("PolarisPostCommentInputReplyingToBar.react"), {
                    onClearReply: n,
                    username: m,
                  })
                : null,
              h.jsx("div", {
                className:
                  "x1ho3rtd x78zum5 x2lah0s x9orja2 xqmdsaz xbaz6xv x1xfsgkm x9f619",
                children: e
                  ? h.jsx(c("IGDSBox.react"), {
                      alignItems: "center",
                      width: "100%",
                      children: h.jsx(c("IGDSText.react"), {
                        color: "tertiaryText",
                        textAlign: "center",
                        children: d("PolarisGenericStrings").COMMENTING_LIMITED,
                      }),
                    })
                  : h.jsx(c("PolarisPostCommentInputRevampedOrLexical.react"), {
                      adInfo: b,
                      isLoggedIn: !0,
                      isSidecar: !1,
                      isVideo: f,
                      ownerId: a,
                      postId: g,
                      viewerId:
                        (j = k == null ? void 0 : k.id) != null ? j : "",
                      viewerProfilePicture:
                        k == null ? void 0 : k.profilePictureUrl,
                    }),
              }),
            ],
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisCommentLikeButton_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisCommentLikeButton_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_liked_comment",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePolarisCommentLike_comment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePolarisCommentUnlike_comment",
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "usePolarisCommentLikeMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "comment_id" },
          { defaultValue: null, kind: "LocalArgument", name: "data" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "comment_id",
                variableName: "comment_id",
              },
              { kind: "Variable", name: "data", variableName: "data" },
            ],
            concreteType: "XDTEmptyRecord",
            kind: "LinkedField",
            name: "xdt_api__v1__media__comment_id__comment_like",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "usePolarisCommentLikeMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "usePolarisCommentLikeMutation",
          selections: b,
        },
        params: {
          id: "9758956637451336",
          metadata: {},
          name: "usePolarisCommentLikeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "usePolarisCommentLike_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "usePolarisCommentLike_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "usePolarisCommentUnlikeMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "comment_id" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "comment_id",
                variableName: "comment_id",
              },
            ],
            concreteType: "XDTEmptyRecord",
            kind: "LinkedField",
            name: "xdt_api__v1__media__comment_id__comment_unlike",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "usePolarisCommentUnlikeMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "usePolarisCommentUnlikeMutation",
          selections: b,
        },
        params: {
          id: "6786628554687668",
          metadata: {},
          name: "usePolarisCommentUnlikeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "usePolarisCommentUnlike_comment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "usePolarisCommentUnlike_comment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        },
      ],
      type: "XDTCommentDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisFeedContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = h.createContext({ feedWidth: null, mediaWidth: null });
    function a(a) {
      var b = a.children,
        c = a.feedWidth,
        d = a.mediaWidth;
      a = i(
        function () {
          return { feedWidth: c, mediaWidth: d };
        },
        [c, d]
      );
      return h.jsx(j.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PolarisFeedContext = j;
    g.PolarisFeedContextProvider = a;
  },
  98
);
__d(
  "usePolarisIsFeedMobileLayout",
  [
    "IGDSThemeConstantsHelpers",
    "PolarisUA",
    "usePolarisGetFeedMediaWidthBasedOnReelHeight",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("IGDSThemeConstantsHelpers").getNumericValue(
      "revamp-feed-card-dense-padding"
    );
    function a() {
      var a = c("usePolarisGetFeedMediaWidthBasedOnReelHeight")();
      a = a.mediaWidth;
      if (d("PolarisUA").isMobile()) return !0;
      var b = window.innerWidth;
      return a != null && a > 0 ? b < a + h : !1;
    }
    g.usePolarisIsFeedMobileLayout = a;
  },
  98
);
__d(
  "PolarisPostHeaderGlimmer.react",
  ["IGDSGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          paddingStart: "x1swvt13",
          paddingEnd: "x1pi30zi",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          height: "xng8ra",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        headerInfo: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
        avatar: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "x10w6t97",
          width: "x1td3qas",
          marginEnd: "xq8finb",
          $$css: !0,
        },
        username: {
          width: "xifkd7f",
          height: "x170jfvy",
          marginBottom: "x12nagc",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          $$css: !0,
        },
        location: {
          height: "x170jfvy",
          width: "x1exxlbk",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.index;
      a = a === void 0 ? 0 : a;
      return h.jsxs("div", {
        className: "x1swvt13 x1pi30zi x78zum5 x1q0g3np xng8ra x6s0dn4",
        children: [
          h.jsx(c("IGDSGlimmer.react"), { index: a, xstyle: i.avatar }),
          h.jsxs("div", {
            className: "x78zum5 xdt5ytf",
            children: [
              h.jsx(c("IGDSGlimmer.react"), {
                index: a + 1,
                xstyle: i.username,
              }),
              h.jsx(c("IGDSGlimmer.react"), {
                index: a + 2,
                xstyle: i.location,
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostGlimmer.react",
  ["IGDSGlimmer.react", "PolarisPostHeaderGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          width: "xh8yej3",
          $$css: !0,
        },
        media: { width: "xh8yej3", height: "x16nrsnc", $$css: !0 },
      };
    function a(a) {
      a = a.index;
      a = a === void 0 ? 0 : a;
      return h.jsxs("div", {
        className: "x78zum5 xdt5ytf xh8yej3",
        children: [
          h.jsx(c("PolarisPostHeaderGlimmer.react"), { index: a }),
          h.jsx(c("IGDSGlimmer.react"), { index: a + 1, xstyle: i.media }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisCommentLike",
  [
    "CometRelay",
    "react",
    "usePolarisCommentLikeMutation.graphql",
    "usePolarisCommentLike_comment.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react").useCallback,
      k = h !== void 0 ? h : (h = b("usePolarisCommentLikeMutation.graphql")),
      l = i !== void 0 ? i : (i = b("usePolarisCommentLike_comment.graphql"));
    function a(a) {
      var b = d("CometRelay").useFragment(l, a);
      a = d("CometRelay").useMutation(k);
      var c = a[0];
      return j(
        function () {
          if (b.pk == null) return;
          var a = function (a) {
            var c = "XDTCommentDict:" + (b.pk || "");
            a = a.get(c);
            a == null ? void 0 : a.setValue(!0, "has_liked_comment");
            c = a == null ? void 0 : a.getValue("comment_like_count");
            c != null &&
              (a == null
                ? void 0
                : a.setValue(Number(c) + 1, "comment_like_count"));
          };
          c({
            variables: { comment_id: b.pk, data: {} },
            optimisticUpdater: a,
            updater: a,
          });
        },
        [b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisCommentUnlike",
  [
    "CometRelay",
    "react",
    "usePolarisCommentUnlikeMutation.graphql",
    "usePolarisCommentUnlike_comment.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react").useCallback,
      k = h !== void 0 ? h : (h = b("usePolarisCommentUnlikeMutation.graphql")),
      l = i !== void 0 ? i : (i = b("usePolarisCommentUnlike_comment.graphql"));
    function a(a) {
      var b = d("CometRelay").useFragment(l, a);
      a = d("CometRelay").useMutation(k);
      var c = a[0];
      return j(
        function () {
          if (b.pk == null) return;
          var a = function (a) {
            var c = "XDTCommentDict:" + (b.pk || "");
            a = a.get(c);
            a == null ? void 0 : a.setValue(!1, "has_liked_comment");
            c = a == null ? void 0 : a.getValue("comment_like_count");
            c != null &&
              (a == null
                ? void 0
                : a.setValue(Number(c) - 1, "comment_like_count"));
          };
          c({
            variables: { comment_id: b.pk },
            optimisticUpdater: a,
            updater: a,
          });
        },
        [b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCommentLikeButton.next",
  [
    "BaseButton.react",
    "CometRelay",
    "IGDSBox.react",
    "IGDSHeartFilledIcon",
    "IGDSHeartPanoOutlineIcon",
    "IGDSText.react",
    "PolarisBigNumber.react",
    "PolarisCommentLikeButton_comment.graphql",
    "PolarisIGCoreSVGIconButton",
    "PolarisInteractionsStrings",
    "react",
    "stylex",
    "usePolarisCommentLike",
    "usePolarisCommentUnlike",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        small: {
          backgroundColor: "xjbqb8w",
          borderTop: "x76ihet",
          borderEnd: "xwmqs3e",
          borderBottom: "x112ta8",
          borderStart: "xxxdfa6",
          cursor: "x1ypdohk",
          lineHeight: "x15bjb6t",
          outline: "x1a2a7pz",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          $$css: !0,
        },
        animation: {
          animationDuration: "x1ykxiw6",
          animationTimingFunction: "x4hg4is",
          transform: "x3oybdh",
          $$css: !0,
        },
      };
    function k(a) {
      var b = a.color;
      b = b === void 0 ? "ig-primary-icon" : b;
      var e = a.handleClick,
        f = a.isLiked,
        g = a.likeChangeCount,
        h = a.likeCount,
        k = a.onLikeCountClick,
        l = a.padding,
        m = a.shadow;
      m = m === void 0 ? !1 : m;
      a = a.size;
      var n = function () {
        k != null && k();
      };
      return i.jsxs(c("IGDSBox.react"), {
        children: [
          i.jsx(c("PolarisIGCoreSVGIconButton"), {
            hover: f
              ? null
              : i.jsx(c("IGDSHeartPanoOutlineIcon"), {
                  alt: d("PolarisInteractionsStrings").LIKE_TEXT,
                  color: "ig-secondary-icon",
                  shadow: m,
                  size: a,
                }),
            onClick: e,
            padding: l,
            children: i.jsx(
              "span",
              {
                className: c("stylex")(j.animation && g > 0),
                children: f
                  ? i.jsx(c("IGDSHeartFilledIcon"), {
                      alt: d("PolarisInteractionsStrings").UNLIKE_TEXT,
                      color: "ig-badge",
                      shadow: m,
                      size: a,
                    })
                  : i.jsx(c("IGDSHeartPanoOutlineIcon"), {
                      alt: d("PolarisInteractionsStrings").LIKE_TEXT,
                      color: b,
                      shadow: m,
                      size: a,
                    }),
              },
              g
            ),
          }),
          h != null && h > 0
            ? i.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                marginTop: 2,
                children: i.jsx(c("BaseButton.react"), {
                  onClick: n,
                  children: i.jsx(c("IGDSText.react"), {
                    color: "secondaryText",
                    size: "footnote",
                    textAlign: "center",
                    weight: "semibold",
                    children: i.jsx(c("PolarisBigNumber.react"), {
                      shortenNumber: !0,
                      value: h,
                    }),
                  }),
                }),
              })
            : null,
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    var l =
      h !== void 0 ? h : (h = b("PolarisCommentLikeButton_comment.graphql"));
    function a(a) {
      var b = a.color,
        e = a.isLarge,
        f = a.likeCount,
        g = a.onLikeCountClick,
        h = a.padding,
        j = a.queryReference,
        m = a.shadow,
        n = a.size;
      a = a.xstyle;
      j = d("CometRelay").useFragment(l, j);
      var o = c("usePolarisCommentLike")(j),
        p = c("usePolarisCommentUnlike")(j),
        q = j.has_liked_comment || !1;
      j = function (a) {
        a.preventDefault(), q === !0 ? p() : o();
      };
      return i.jsx("span", {
        className: c("stylex")(a),
        children: e
          ? i.jsx(k, {
              color: b,
              handleClick: j,
              isLiked: q,
              likeChangeCount: 0,
              likeCount: f,
              onLikeCountClick: g,
              padding: (a = h) != null ? a : 8,
              shadow: m,
              size: (e = n) != null ? e : 24,
            })
          : i.jsx("div", {
              className:
                "xjbqb8w x76ihet xwmqs3e x112ta8 xxxdfa6 x1ypdohk x15bjb6t x1a2a7pz xexx8yu x4uap5 x18d9i69 xkhd6sd",
              children: i.jsx(k, {
                color: b,
                handleClick: j,
                isLiked: q,
                likeChangeCount: 0,
                likeCount: f,
                onLikeCountClick: g,
                padding: (a = h) != null ? a : 0,
                shadow: m,
                size: (e = n) != null ? e : 12,
              }),
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisMobilePostPageHeader.next",
  [
    "fbt",
    "PolarisGenericMobileHeader.react",
    "PolarisNavBackButton.react",
    "PolarisReactRedux",
    "PolarisShellMobileHeader.react",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Post");
    function a() {
      var a = d("PolarisReactRedux").useSelector(
          d("polarisUserSelectors").getViewer
        ),
        b = [
          i.jsx(
            c("PolarisNavBackButton.react"),
            { analyticsContext: "postPage" },
            "back"
          ),
        ];
      b = i.jsx(c("PolarisGenericMobileHeader.react"), {
        leftActions: b,
        title: j,
      });
      return i.jsx(c("PolarisShellMobileHeader.react"), {
        mobileHeader: b,
        viewer: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostLayout.next",
  ["PolarisConditionalPageLayoutHandler.react", "PolarisShell.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      a = h.jsx(c("PolarisShell.react"), {
        backgroundColor: "ig-primary-background",
        pageIdentifier: "postPage",
        children: a,
      });
      return c("PolarisConditionalPageLayoutHandler.react") != null
        ? h.jsx(c("PolarisConditionalPageLayoutHandler.react"), {
            backgroundColor: "primaryBackground",
            mainComponent: a,
          })
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisCommentLikeListsActions",
  ["PolarisCommentLikeListsState", "PolarisPaginationUtils", "nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "5f0b1f6281e72053cbc07909c8d154ae",
      i = 24,
      j = 1;
    function a() {
      return d("PolarisPaginationUtils").generatePaginationActionCreators({
        pageSize: i,
        pagesToPreload: j,
        getState: function (a, b) {
          return a.commentLikeLists.get(
            b,
            d("PolarisCommentLikeListsState").EMPTY_LISTS
          ).pagination;
        },
        queryId: h,
        queryParams: function (a) {
          return { comment_id: a };
        },
        onUpdate: function (a, b, d) {
          b = b && c("nullthrows")(b.comment).edge_liked_by;
          return {
            type: "COMMENT_LIKE_LISTS_REQUEST_UPDATED",
            fetch: a,
            commentId: d,
            count: b == null ? void 0 : b.count,
            users: ((b == null ? void 0 : b.edges) || []).map(function (a) {
              return a.node;
            }),
            pageInfo: b == null ? void 0 : b.page_info,
          };
        },
        onError: function (a, b, c) {
          return {
            type: "COMMENT_LIKE_LISTS__REQUEST_FAILED",
            fetch: b,
            commentId: c,
          };
        },
      });
    }
    b = a();
    e = b;
    f = b.first;
    a = b.next;
    g._actionCreators = e;
    g.requestCommentLikes = f;
    g.requestNextCommentLikes = a;
  },
  98
);
__d(
  "PolarisIgWellbeingRestrictManageCommentFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        var b = a.action,
          c = a.actorIgUserid,
          e = a.commentId,
          f = a.commentThreadId,
          g = a.parentMediaId;
        a = a.step;
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_wellbeing_restrict_manage_comment",
          {
            action: b,
            actor_ig_userid: parseInt(c, 10),
            comment_id: e ? parseInt(e, 10) : void 0,
            entrypoint: "comment",
            parent_comment_id: f === e ? void 0 : parseInt(f, 10),
            parent_media_id: parseInt(g, 10),
            step: a,
          },
          {},
          h
        );
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisPostGifComment.react",
  ["IGDSBox.react", "PolarisODS", "PolarisPostStrings", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      a = a.gifSrc;
      i(
        function () {
          c("PolarisODS").incr("web.comments.gif_comment.view_impression");
        },
        [a]
      );
      var b = function () {
        c("PolarisODS").incr("web.comments.gif_comment.img_error");
      };
      return h.jsx(c("IGDSBox.react"), {
        marginTop: 2,
        children: h.jsx("img", {
          alt: d("PolarisPostStrings").GIF_COMMENT_ALT_TEXT,
          className: "x107yiy2 xv8uw2v x1tfwpuw x2g32xy",
          onError: b,
          src: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
