import type { ClassOptions, vLazyImgBinding, vLazyImgOptions } from './types';
export * from './types';
export declare const DEFAULT_OPTIONS: ClassOptions;
export declare class LazyImg {
    private observers;
    private readonly defaultOptions;
    private options;
    private onImgLoadedCallback;
    private onImgErrorCallback;
    private hasImgLoaded;
    constructor(opts?: vLazyImgOptions);
    private loadErrorPhoto;
    private buildOptions;
    private removeClass;
    private addClass;
    private removeAllStateClasses;
    private setBaseClass;
    private imageIsLoading;
    private imageHasNoPhoto;
    private imageIsLoaded;
    private imageHasError;
    private getSrc;
    private getImageUrl;
    private setPictureSourceUrls;
    private hasBgImgMode;
    private isPictureElement;
    private getImgElement;
    private setDefaultPhoto;
    private addEventListenerToImg;
    private loadImage;
    setImgSrc(el: HTMLElement, src: string): void;
    private handleIntersectionObserver;
    private createObserver;
    private imageHandler;
    private bindUpdateHandler;
    add(el: HTMLElement, binding: vLazyImgBinding): Promise<void>;
    update(el: HTMLElement, binding: vLazyImgBinding): Promise<void>;
    remove(el: HTMLElement, binding: vLazyImgBinding): void;
}