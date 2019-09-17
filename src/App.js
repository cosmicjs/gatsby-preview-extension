import React, { useState, useEffect } from 'react';
import { ExtensionUI } from '@gatsby-cloud-pkg/gatsby-cms-extension-base';
import './App.css';

function App() {
  const [contentSlug, putContentSlug] = useState('');
  const [previewUrl, putPreviewUrl] = useState('');
  const [authToken, putAuthToken] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    putContentSlug(url.searchParams.get('object_slug') || '');
    putPreviewUrl(url.searchParams.get('preview_url') || '');
    putAuthToken(url.searchParams.get('auth_token') || '');
  }, []);

  return (
    <ExtensionUI
      contentSlug={contentSlug}
      previewUrl={previewUrl}
      authToken={authToken}
    />
  );
}

export default App;
