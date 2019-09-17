import React, { useState, useEffect } from 'react';
import {
  ExtensionUI,
  getContentPath
} from '@gatsby-cloud-pkg/gatsby-cms-extension-base';

function App() {
  const [contentSlug, putContentSlug] = useState('');
  const [previewUrl, putPreviewUrl] = useState('');
  const [previewContentUrl, putPreviewContentUrl] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    putContentSlug(url.searchParams.get('object_slug') || '');
    putPreviewUrl(url.searchParams.get('preview_url') || '');
    async function fetchContentPath(payload) {
      try {
        const finalPreviewURl = await getContentPath(payload);
        putPreviewContentUrl(finalPreviewURl | '');
      } catch (e) {
        putPreviewContentUrl('');
      }
    }
    if (contentSlug && previewUrl) {
      fetchContentPath({ contentSlug, previewUrl, authToken: '' });
    }
  }, [contentSlug, previewUrl]);

  return (
    <>{previewContentUrl && <ExtensionUI previewUrl={previewContentUrl} />}</>
  );
}

export default App;
