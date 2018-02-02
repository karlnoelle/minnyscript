import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import TechPagePreview from './preview-templates/TechPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('tech', TechPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
