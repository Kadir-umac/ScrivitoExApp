import * as Scrivito from "scrivito";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("News", {
  title: "News",
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Title for new Page",
      description: "Limit to 55 characters.",
    },
  },
  properties: ["title","text","titleImage","topics"],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...metadataInitialContent,
    body: [new SectionWidget({})],
    publishDate: () => new Date(),
    title: 'My News',
    topics: ['Sample topic','best topic'],
    text: "Add news summary here...",
  },
  validations: [...metadataValidations],
});
