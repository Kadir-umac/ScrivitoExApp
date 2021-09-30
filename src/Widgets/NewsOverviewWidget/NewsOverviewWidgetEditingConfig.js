import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('NewsOverviewWidget',{
    attributes: {
        maxItems: {
            title: 'Max News',
            description: 'max number of news that must be displayed'
        }
    },
    initialContent: {
        maxItems: 10,
    },
    properties: ['maxItems']
})