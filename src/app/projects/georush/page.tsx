'use client';

import clsx from 'clsx';
import Head from 'next/head';
import Script from 'next/script';
import {FC, useCallback, useEffect, useRef, useState} from 'react';

const buildUrl = '/geo/Build';
const loaderUrl = buildUrl + '/geo.loader.js';
const config = {
  dataUrl: buildUrl + '/geo.data',
  frameworkUrl: buildUrl + '/geo.framework.js',
  codeUrl: buildUrl + '/geo.wasm',
  streamingAssetsUrl: 'StreamingAssets',
  companyName: 'TeamChicanery',
  productName: 'GeoRush',
  productVersion: '0.1',
};

declare global {
  var createUnityInstance: (
    canvas: HTMLCanvasElement,
    config: any,
    onProgress: (progress: number) => void,
  ) => Promise<any>;
}

const GeoRushLoader: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const warningBannerRef = useRef<HTMLDivElement>(null);
  const fullScreenRef = useRef<HTMLDivElement>(null);
  const [warning, setWarning] = useState<{msg: string; type: 'error' | 'warning'} | null>();
  const [unityInstance, setUnityInstance] = useState<any>(null);

  const showBanner = useCallback((msg: string, type: string) => {
    setWarning({msg, type: type as 'error' | 'warning'});
    setTimeout(() => {
      setWarning(null);
    }, 5000);
  }, []);

  const handleScriptLoaded = useCallback(async () => {
    try {
      console.log('createUnityInstance', createUnityInstance);
      const instance = await createUnityInstance(
        canvasRef.current!,
        {...config, showBanner},
        (progress) => {
          progressBarRef.current!.style.width = 100 * progress + '%';
        },
      );
      setUnityInstance(instance);
    } catch (e) {
      console.error(e);
    }
  }, [showBanner]);

  return (
    <div ref={containerRef} id="unity-container" className="unity-desktop">
      <canvas ref={canvasRef} id="unity-canvas" width={1366} height={768} />
      {!unityInstance && (
        <div id="unity-loading-bar" ref={loadingBarRef} className="block">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full" ref={progressBarRef} />
          </div>
        </div>
      )}
      <div ref={warningBannerRef} id="unity-warning">
        {warning && (
          <div
            className={clsx(
              'p-3',
              warning.type === 'error' && 'text-text-red-500',
              warning.type === 'warning' && 'text-yellow-500',
            )}>
            {warning.msg}
          </div>
        )}
      </div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div
          ref={fullScreenRef}
          id="unity-fullscreen-button"
          onClick={() => unityInstance.SetFullscreen(1)}></div>
        <div id="unity-build-title">GeoRush</div>
      </div>

      <Script src={loaderUrl} onLoad={handleScriptLoaded} />
    </div>
  );
};

export default GeoRushLoader;
