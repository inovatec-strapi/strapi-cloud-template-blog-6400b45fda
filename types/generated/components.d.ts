import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface EbgSharedUrl extends Schema.Component {
  collectionName: 'components_ebg_shared_urls';
  info: {
    displayName: 'URL';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
  };
}

export interface EbgSharedStandard extends Schema.Component {
  collectionName: 'components_ebg_shared_standards';
  info: {
    displayName: 'Standard';
  };
  attributes: {
    Title: Attribute.Text;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedStandardDocuments extends Schema.Component {
  collectionName: 'components_ebg_shared_standard_documents';
  info: {
    displayName: 'Standard_Documents';
    description: '';
  };
  attributes: {
    Standard_Promo: Attribute.Component<'ebg-shared.standard', true>;
  };
}

export interface EbgSharedSiteAlert extends Schema.Component {
  collectionName: 'components_ebg_shared_site_alerts';
  info: {
    displayName: 'Site Alert';
  };
  attributes: {
    SiteAlerts: Attribute.Component<'ebg-shared.site-alert-component'>;
  };
}

export interface EbgSharedSiteAlertComponent extends Schema.Component {
  collectionName: 'components_ebg_shared_site_alert_components';
  info: {
    displayName: 'Site-Alert-Component';
  };
  attributes: {
    Text: Attribute.Text;
  };
}

export interface EbgSharedPromotionBanner extends Schema.Component {
  collectionName: 'components_ebg_shared_promotion_banners';
  info: {
    displayName: 'Promotion_Banner';
    description: '';
  };
  attributes: {
    Promotion_Banner: Attribute.Component<
      'ebg-shared.promotion-banner-component',
      true
    >;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Promo_Title: Attribute.String;
  };
}

export interface EbgSharedPromotionBannerComponent extends Schema.Component {
  collectionName: 'components_ebg_shared_promotion_banner_components';
  info: {
    displayName: 'Promotion_Banner_component';
    description: '';
  };
  attributes: {
    Title: Attribute.Text;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedOem extends Schema.Component {
  collectionName: 'components_ebg_shared_oems';
  info: {
    displayName: 'OEM';
    description: '';
  };
  attributes: {
    OEM_Documents: Attribute.Component<'ebg-shared.oem-documents', true>;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedOemDocuments extends Schema.Component {
  collectionName: 'components_ebg_shared_oem_documents';
  info: {
    displayName: 'OEM-Documents';
    description: '';
  };
  attributes: {
    Title: Attribute.Text;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedLicensingAgreement extends Schema.Component {
  collectionName: 'components_ebg_shared_licensing_agreements';
  info: {
    displayName: 'Licensing Agreement';
  };
  attributes: {
    Licensing_Agreement: Attribute.Component<'ebg-shared.licensing-agreement-c'>;
  };
}

export interface EbgSharedLicensingAgreementC extends Schema.Component {
  collectionName: 'components_ebg_shared_licensing_agreement_cs';
  info: {
    displayName: 'Licensing_Agreement_c';
  };
  attributes: {
    Title: Attribute.String;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedIndustryResources extends Schema.Component {
  collectionName: 'components_ebg_shared_industry_resources';
  info: {
    displayName: 'Industry_resources';
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    URL: Attribute.String;
  };
}

export interface EbgSharedIndustryResourceComponent extends Schema.Component {
  collectionName: 'components_ebg_shared_industry_resource_components';
  info: {
    displayName: 'Industry_resource_component';
  };
  attributes: {
    Industry_resources_comp: Attribute.Component<
      'ebg-shared.industry-resources',
      true
    >;
  };
}

export interface EbgSharedIndustryNews extends Schema.Component {
  collectionName: 'components_ebg_shared_industry_news';
  info: {
    displayName: 'Industry_news';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedIndustryNewsComp extends Schema.Component {
  collectionName: 'components_ebg_shared_industry_news_comps';
  info: {
    displayName: 'Industry News Comp';
  };
  attributes: {
    Industry_News: Attribute.Component<'ebg-shared.industry-news'>;
  };
}

export interface EbgSharedGroupOfDocuments extends Schema.Component {
  collectionName: 'components_ebg_shared_group_of_documents';
  info: {
    displayName: 'Group_of_Documents';
    description: '';
  };
  attributes: {
    Documents: Attribute.Component<'ebg-shared.dealer-forms-documents', true>;
  };
}

export interface EbgSharedFaq extends Schema.Component {
  collectionName: 'components_ebg_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.RichText;
  };
}

export interface EbgSharedFaQs extends Schema.Component {
  collectionName: 'components_ebg_shared_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    FAQ: Attribute.Component<'ebg-shared.faq', true>;
  };
}

export interface EbgSharedDocuments extends Schema.Component {
  collectionName: 'components_ebg_shared_documents';
  info: {
    displayName: 'Documents';
    icon: 'folder';
    description: '';
  };
  attributes: {
    Documents: Attribute.Component<'ebg-shared.document', true>;
  };
}

export interface EbgSharedDocument extends Schema.Component {
  collectionName: 'components_ebg_shared_document';
  info: {
    displayName: 'Document';
    icon: 'folder';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedDealerFormsDocuments extends Schema.Component {
  collectionName: 'components_ebg_shared_dealer_forms_documents';
  info: {
    displayName: 'Dealer_Forms_Documents';
    description: '';
  };
  attributes: {
    TItle: Attribute.String;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EbgSharedAdditionalManufactures extends Schema.Component {
  collectionName: 'components_ebg_shared_additional_manufactures';
  info: {
    displayName: 'Additional_manufactures';
  };
  attributes: {
    Additional_Manufactures: Attribute.Component<
      'ebg-shared.additional-manufactures-single',
      true
    >;
  };
}

export interface EbgSharedAdditionalManufacturesSingle
  extends Schema.Component {
  collectionName: 'components_ebg_shared_additional_manufactures_singles';
  info: {
    displayName: 'Additional_Manufactures_single';
  };
  attributes: {
    TItle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'ebg-shared.url': EbgSharedUrl;
      'ebg-shared.standard': EbgSharedStandard;
      'ebg-shared.standard-documents': EbgSharedStandardDocuments;
      'ebg-shared.site-alert': EbgSharedSiteAlert;
      'ebg-shared.site-alert-component': EbgSharedSiteAlertComponent;
      'ebg-shared.promotion-banner': EbgSharedPromotionBanner;
      'ebg-shared.promotion-banner-component': EbgSharedPromotionBannerComponent;
      'ebg-shared.oem': EbgSharedOem;
      'ebg-shared.oem-documents': EbgSharedOemDocuments;
      'ebg-shared.licensing-agreement': EbgSharedLicensingAgreement;
      'ebg-shared.licensing-agreement-c': EbgSharedLicensingAgreementC;
      'ebg-shared.industry-resources': EbgSharedIndustryResources;
      'ebg-shared.industry-resource-component': EbgSharedIndustryResourceComponent;
      'ebg-shared.industry-news': EbgSharedIndustryNews;
      'ebg-shared.industry-news-comp': EbgSharedIndustryNewsComp;
      'ebg-shared.group-of-documents': EbgSharedGroupOfDocuments;
      'ebg-shared.faq': EbgSharedFaq;
      'ebg-shared.fa-qs': EbgSharedFaQs;
      'ebg-shared.documents': EbgSharedDocuments;
      'ebg-shared.document': EbgSharedDocument;
      'ebg-shared.dealer-forms-documents': EbgSharedDealerFormsDocuments;
      'ebg-shared.additional-manufactures': EbgSharedAdditionalManufactures;
      'ebg-shared.additional-manufactures-single': EbgSharedAdditionalManufacturesSingle;
    }
  }
}
