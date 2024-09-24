import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    singularName: 'action';
    pluralName: 'actions';
    displayName: 'actions';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: 'Write about yourself and the content you create';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String;
    blocks: Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealersTestimonialsEbgProdDealersTestimonialsEbgProd
  extends Schema.CollectionType {
  collectionName: 'dealers_testimonials_ebg_prods';
  info: {
    singularName: 'dealers-testimonials-ebg-prod';
    pluralName: 'dealers-testimonials-ebg-prods';
    displayName: 'Dealers Testimonials EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Description: Attribute.Text;
    Author: Attribute.String;
    Dealer: Attribute.String;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Active: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dealers-testimonials-ebg-prod.dealers-testimonials-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dealers-testimonials-ebg-prod.dealers-testimonials-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealersTestimonialsEbgUatDealersTestimonialsEbgUat
  extends Schema.CollectionType {
  collectionName: 'dealers_testimonials_ebg_uats';
  info: {
    singularName: 'dealers-testimonials-ebg-uat';
    pluralName: 'dealers-testimonials-ebg-uats';
    displayName: 'Dealers Testimonials EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Description: Attribute.Text;
    Author: Attribute.String;
    Dealer: Attribute.String;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Active: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dealers-testimonials-ebg-uat.dealers-testimonials-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dealers-testimonials-ebg-uat.dealers-testimonials-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocsEbgProdDocsEbgProd extends Schema.CollectionType {
  collectionName: 'docs_ebg_prods';
  info: {
    singularName: 'docs-ebg-prod';
    pluralName: 'docs-ebg-prods';
    displayName: 'Docs EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Active: Attribute.Boolean;
    Order: Attribute.Integer;
    Documents: Attribute.DynamicZone<['ebg-shared.group-of-documents']>;
    Include_After_Section: Attribute.Enumeration<
      ['Funding & Lienholder Information', 'Training & Education Center']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::docs-ebg-prod.docs-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::docs-ebg-prod.docs-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocsEbgUatDocsEbgUat extends Schema.CollectionType {
  collectionName: 'docs_ebg_uats';
  info: {
    singularName: 'docs-ebg-uat';
    pluralName: 'docs-ebg-uats';
    displayName: 'Docs EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Active: Attribute.Boolean;
    Order: Attribute.Integer;
    Documents: Attribute.DynamicZone<['ebg-shared.group-of-documents']>;
    Include_After_Section: Attribute.Enumeration<
      ['Funding & Lienholder Information', 'Training & Education Center']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::docs-ebg-uat.docs-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::docs-ebg-uat.docs-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFundingGuideEbgProdFundingGuideEbgProd
  extends Schema.CollectionType {
  collectionName: 'funding_guide_ebg_prods';
  info: {
    singularName: 'funding-guide-ebg-prod';
    pluralName: 'funding-guide-ebg-prods';
    displayName: 'Funding Guide EBG PROD';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Active: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::funding-guide-ebg-prod.funding-guide-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::funding-guide-ebg-prod.funding-guide-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFundingGuideEbgUatFundingGuideEbgUat
  extends Schema.CollectionType {
  collectionName: 'funding_guide_ebg_uats';
  info: {
    singularName: 'funding-guide-ebg-uat';
    pluralName: 'funding-guide-ebg-uats';
    displayName: 'Funding Guide EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Document: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Active: Attribute.Boolean;
    Description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::funding-guide-ebg-uat.funding-guide-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::funding-guide-ebg-uat.funding-guide-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGeneralEbgProdGeneralEbgProd extends Schema.CollectionType {
  collectionName: 'general_ebg_prods';
  info: {
    singularName: 'general-ebg-prod';
    pluralName: 'general-ebg-prods';
    displayName: 'General EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Type: Attribute.Enumeration<['Alert', 'Logo_Licensing_Agreement']>;
    Active: Attribute.Boolean;
    Content: Attribute.DynamicZone<['ebg-shared.site-alert']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::general-ebg-prod.general-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::general-ebg-prod.general-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGeneralEbgUatGeneralEbgUat extends Schema.CollectionType {
  collectionName: 'general_ebg_uats';
  info: {
    singularName: 'general-ebg-uat';
    pluralName: 'general-ebg-uats';
    displayName: 'General EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Type: Attribute.Enumeration<['Alert', 'Logo_Licensing_Agreement']>;
    Content: Attribute.DynamicZone<['ebg-shared.site-alert']> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    Active: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::general-ebg-uat.general-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::general-ebg-uat.general-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    favicon: Attribute.Media<'images' | 'files' | 'videos'>;
    siteDescription: Attribute.Text & Attribute.Required;
    defaultSeo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLienholderEbgProdLienholderEbgProd
  extends Schema.CollectionType {
  collectionName: 'lienholder_ebg_prods';
  info: {
    singularName: 'lienholder-ebg-prod';
    pluralName: 'lienholder-ebg-prods';
    displayName: 'Lienholder EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    State: Attribute.String;
    EltrId: Attribute.String;
    Name: Attribute.String;
    Address: Attribute.String;
    City: Attribute.String;
    ZipCode: Attribute.String;
    Active: Attribute.Boolean;
    EltrId2: Attribute.String;
    Name2: Attribute.String;
    Address2: Attribute.String;
    City2: Attribute.String;
    ZipCode2: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lienholder-ebg-prod.lienholder-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lienholder-ebg-prod.lienholder-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLienholderEbgUatLienholderEbgUat
  extends Schema.CollectionType {
  collectionName: 'lienholder_ebg_uats';
  info: {
    singularName: 'lienholder-ebg-uat';
    pluralName: 'lienholder-ebg-uats';
    displayName: 'Lienholder EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    State: Attribute.String;
    EltrId: Attribute.String;
    Name: Attribute.String;
    Address: Attribute.String;
    City: Attribute.String;
    ZipCode: Attribute.String;
    Active: Attribute.Boolean;
    EltrId2: Attribute.String;
    Name2: Attribute.String;
    Address2: Attribute.String;
    City2: Attribute.String;
    ZipCode2: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lienholder-ebg-uat.lienholder-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lienholder-ebg-uat.lienholder-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsEbgProdNewsEbgProd extends Schema.CollectionType {
  collectionName: 'news_ebg_prods';
  info: {
    singularName: 'news-ebg-prod';
    pluralName: 'news-ebg-prods';
    displayName: 'News EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Active: Attribute.Boolean;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-ebg-prod.news-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-ebg-prod.news-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsEbgUatNewsEbgUat extends Schema.CollectionType {
  collectionName: 'news_ebg_uats';
  info: {
    singularName: 'news-ebg-uat';
    pluralName: 'news-ebg-uats';
    displayName: 'News EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Active: Attribute.Boolean;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-ebg-uat.news-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-ebg-uat.news-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramRateEbgProdProgramRateEbgProd
  extends Schema.CollectionType {
  collectionName: 'program_rate_ebg_prods';
  info: {
    singularName: 'program-rate-ebg-prod';
    pluralName: 'program-rate-ebg-prods';
    displayName: 'Program Rate EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    ProgramType: Attribute.Enumeration<
      [
        'Standard',
        'OEM Promotional Rates/Special Programs Offered',
        'Sponsored Promotional Programs',
        'Additional manufactures '
      ]
    >;
    Active: Attribute.Boolean;
    Content: Attribute.DynamicZone<
      [
        'ebg-shared.oem',
        'ebg-shared.additional-manufactures',
        'ebg-shared.promotion-banner',
        'ebg-shared.standard-documents'
      ]
    > &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-rate-ebg-prod.program-rate-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::program-rate-ebg-prod.program-rate-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramRateEbgUatProgramRateEbgUat
  extends Schema.CollectionType {
  collectionName: 'program_rate_ebg_uats';
  info: {
    singularName: 'program-rate-ebg-uat';
    pluralName: 'program-rate-ebg-uats';
    displayName: 'Program Rate EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    ProgramType: Attribute.Enumeration<
      [
        'Standard',
        'OEM Promotional Rates/Special Programs Offered',
        'Sponsored Promotional Programs',
        'Additional manufactures '
      ]
    >;
    Active: Attribute.Boolean;
    Content: Attribute.DynamicZone<
      [
        'ebg-shared.oem',
        'ebg-shared.additional-manufactures',
        'ebg-shared.promotion-banner',
        'ebg-shared.standard-documents'
      ]
    > &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-rate-ebg-uat.program-rate-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::program-rate-ebg-uat.program-rate-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamLeadsAndContactsEbgProdTeamLeadsAndContactsEbgProd
  extends Schema.CollectionType {
  collectionName: 'team_leads_and_contacts_ebg_prods';
  info: {
    singularName: 'team-leads-and-contacts-ebg-prod';
    pluralName: 'team-leads-and-contacts-ebg-prods';
    displayName: 'Team Leads And Contacts EBG PROD';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
    Phone: Attribute.String;
    Email: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Active: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-leads-and-contacts-ebg-prod.team-leads-and-contacts-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-leads-and-contacts-ebg-prod.team-leads-and-contacts-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamLeadsAndContactsEbgUatTeamLeadsAndContactsEbgUat
  extends Schema.CollectionType {
  collectionName: 'team_leads_and_contacts_ebg_uats';
  info: {
    singularName: 'team-leads-and-contacts-ebg-uat';
    pluralName: 'team-leads-and-contacts-ebg-uats';
    displayName: 'Team Leads And Contacts EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
    Phone: Attribute.String;
    Email: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Active: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-leads-and-contacts-ebg-uat.team-leads-and-contacts-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-leads-and-contacts-ebg-uat.team-leads-and-contacts-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestEbgTestEbg extends Schema.CollectionType {
  collectionName: 'test_ebgs';
  info: {
    singularName: 'test-ebg';
    pluralName: 'test-ebgs';
    displayName: 'TEST EBG';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TEST: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::test-ebg.test-ebg',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::test-ebg.test-ebg',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingCenterEbgProdTrainingCenterEbgProd
  extends Schema.CollectionType {
  collectionName: 'training_center_ebg_prods';
  info: {
    singularName: 'training-center-ebg-prod';
    pluralName: 'training-center-ebg-prods';
    displayName: 'Training Center EBG PROD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Active: Attribute.Boolean;
    Category: Attribute.Enumeration<['Downloadable PDFs', 'FAQs']>;
    Content: Attribute.DynamicZone<
      ['ebg-shared.documents', 'ebg-shared.fa-qs']
    > &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    Title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training-center-ebg-prod.training-center-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::training-center-ebg-prod.training-center-ebg-prod',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingCenterEbgUatTrainingCenterEbgUat
  extends Schema.CollectionType {
  collectionName: 'training_center_ebg_uats';
  info: {
    singularName: 'training-center-ebg-uat';
    pluralName: 'training-center-ebg-uats';
    displayName: 'Training Center EBG UAT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Category: Attribute.Enumeration<
      [
        'Downloadable PDFs',
        'FAQs',
        'Glossary',
        'Compliance/Fraud tools and articles'
      ]
    >;
    Active: Attribute.Boolean;
    Content: Attribute.DynamicZone<
      ['ebg-shared.documents', 'ebg-shared.fa-qs']
    > &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    Title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training-center-ebg-uat.training-center-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::training-center-ebg-uat.training-center-ebg-uat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about.about': ApiAboutAbout;
      'api::dealers-testimonials-ebg-prod.dealers-testimonials-ebg-prod': ApiDealersTestimonialsEbgProdDealersTestimonialsEbgProd;
      'api::dealers-testimonials-ebg-uat.dealers-testimonials-ebg-uat': ApiDealersTestimonialsEbgUatDealersTestimonialsEbgUat;
      'api::docs-ebg-prod.docs-ebg-prod': ApiDocsEbgProdDocsEbgProd;
      'api::docs-ebg-uat.docs-ebg-uat': ApiDocsEbgUatDocsEbgUat;
      'api::funding-guide-ebg-prod.funding-guide-ebg-prod': ApiFundingGuideEbgProdFundingGuideEbgProd;
      'api::funding-guide-ebg-uat.funding-guide-ebg-uat': ApiFundingGuideEbgUatFundingGuideEbgUat;
      'api::general-ebg-prod.general-ebg-prod': ApiGeneralEbgProdGeneralEbgProd;
      'api::general-ebg-uat.general-ebg-uat': ApiGeneralEbgUatGeneralEbgUat;
      'api::global.global': ApiGlobalGlobal;
      'api::lienholder-ebg-prod.lienholder-ebg-prod': ApiLienholderEbgProdLienholderEbgProd;
      'api::lienholder-ebg-uat.lienholder-ebg-uat': ApiLienholderEbgUatLienholderEbgUat;
      'api::news-ebg-prod.news-ebg-prod': ApiNewsEbgProdNewsEbgProd;
      'api::news-ebg-uat.news-ebg-uat': ApiNewsEbgUatNewsEbgUat;
      'api::program-rate-ebg-prod.program-rate-ebg-prod': ApiProgramRateEbgProdProgramRateEbgProd;
      'api::program-rate-ebg-uat.program-rate-ebg-uat': ApiProgramRateEbgUatProgramRateEbgUat;
      'api::team-leads-and-contacts-ebg-prod.team-leads-and-contacts-ebg-prod': ApiTeamLeadsAndContactsEbgProdTeamLeadsAndContactsEbgProd;
      'api::team-leads-and-contacts-ebg-uat.team-leads-and-contacts-ebg-uat': ApiTeamLeadsAndContactsEbgUatTeamLeadsAndContactsEbgUat;
      'api::test-ebg.test-ebg': ApiTestEbgTestEbg;
      'api::training-center-ebg-prod.training-center-ebg-prod': ApiTrainingCenterEbgProdTrainingCenterEbgProd;
      'api::training-center-ebg-uat.training-center-ebg-uat': ApiTrainingCenterEbgUatTrainingCenterEbgUat;
    }
  }
}
