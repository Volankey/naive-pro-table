export const apiAnchors = [
  {
    key: 'protableProps',
    path: '#ProTable-Props',
    label: 'ProTable Props',
    children: [
      {
        key: 'apiRequest',
        path: '#ApiRequest',
        label: 'ApiRequest'
      },
      {
        key: 'customParams',
        path: '#CustomParams',
        label: 'CustomParams'
      },
      {
        key: 'dateFormatter',
        path: '#DateFormatter',
        label: 'DateFormatter'
      }
    ]
  },
  {
    key: 'proColumnProperties',
    path: '#ProColumn-Properties',
    label: 'ProColumn Properties',
    children: [
      {
        key: 'proTableBasicColumn',
        path: '#ProTableBasicColumn',
        label: 'ProTableBasicColumn'
      },
      {
        key: 'syncRouteNameRule',
        path: '#SyncRouteNameRule',
        label: 'SyncRouteNameRule'
      },
      {
        key: 'valueEnum',
        path: '#ValueEnum',
        label: 'ValueEnum'
      }
    ]
  },
  {
    key: 'slots',
    path: '#Slots',
    label: 'Slots'
  },
  {
    key: 'hooks',
    path: '#Hooks',
    label: 'Hooks',
    children: [
      {
        key: 'useConfigurableColumns',
        path: '#useConfigurableColumns',
        label: 'useConfigurableColumns'
      },
      {
        key: 'useCustomRouterQuery',
        path: '#useCustomRouterQuery',
        label: 'useCustomRouterQuery'
      }
    ]
  }
]
