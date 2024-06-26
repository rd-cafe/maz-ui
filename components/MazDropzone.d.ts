import { type ComponentPublicInstance, type PropType } from 'vue';
import { type DropzoneOptions, type DropzoneFile } from 'dropzone';
export interface MazDropzoneOptions extends DropzoneOptions {
    dictFilesDescriptions?: string;
    autoRemoveOnError?: boolean;
}
export interface MazDropzoneFile extends DropzoneFile {
    manuallyAdded?: boolean;
}
export interface IMazDropzone extends Dropzone {
    options: MazDropzoneOptions;
}
export interface MazDropzoneInstance extends ComponentPublicInstance {
    manuallyAddFile: (file: DropzoneFile, fileUrl: string) => void;
    setOption: (option: string, value: unknown) => IMazDropzone['options'];
    processQueue: IMazDropzone['processQueue'];
    removeFile: IMazDropzone['removeFile'];
    removeAllFiles: IMazDropzone['removeAllFiles'];
    destroy: IMazDropzone['destroy'];
    disable: IMazDropzone['disable'];
    enable: IMazDropzone['enable'];
    accept: IMazDropzone['accept'];
    addFile: IMazDropzone['addFile'];
    resizeImage: IMazDropzone['resizeImage'];
    cancelUpload: IMazDropzone['cancelUpload'];
    getAcceptedFiles: () => MazDropzoneFile[];
    getRejectedFiles: () => MazDropzoneFile[];
    getFilesWithStatus: IMazDropzone['getFilesWithStatus'];
    getQueuedFiles: IMazDropzone['getQueuedFiles'];
    getUploadingFiles: IMazDropzone['getUploadingFiles'];
    getAddedFiles: IMazDropzone['getAddedFiles'];
    getActiveFiles: IMazDropzone['getActiveFiles'];
}
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<MazDropzoneOptions>;
        required: true;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    noDestroyOnUnmount: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    ButtonElement: import("vue").Ref<HTMLButtonElement | undefined>;
    dropzoneReady: import("vue").Ref<boolean>;
    dropzoneOptions: import("vue").Ref<MazDropzoneOptions | undefined>;
    dropzoneStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    setOption: (option: string, value: unknown) => MazDropzoneOptions;
    manuallyAddFile: (file: DropzoneFile, fileUrl: string) => void;
    removeAllFiles: (cancelIfNecessary?: boolean | undefined) => void;
    processQueue: () => void;
    destroy: () => import("dropzone");
    disable: () => void;
    enable: () => void;
    accept: (file: DropzoneFile, done: (error?: string | Error | undefined) => void) => void;
    addFile: (file: DropzoneFile) => void;
    resizeImage: (file: DropzoneFile, width?: number | undefined, height?: number | undefined, resizeMethod?: string | undefined, callback?: ((...args: any[]) => void) | undefined) => void;
    cancelUpload: (file: DropzoneFile) => void;
    getAcceptedFiles: () => MazDropzoneFile[];
    getRejectedFiles: () => MazDropzoneFile[];
    getFilesWithStatus: (status: string) => DropzoneFile[];
    getQueuedFiles: () => DropzoneFile[];
    getUploadingFiles: () => DropzoneFile[];
    getAddedFiles: () => DropzoneFile[];
    getActiveFiles: () => DropzoneFile[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "error" | "paste" | "reset" | "success" | "thumbnail" | "addedfile" | "addedfiles" | "removedfile" | "processing" | "processingmultiple" | "uploadprogress" | "totaluploadprogress" | "sending" | "sendingmultiple" | "canceled" | "canceledmultiple" | "complete" | "completemultiple" | "maxfilesexceeded" | "maxfilesreached" | "queuecomplete")[], "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "error" | "paste" | "reset" | "success" | "thumbnail" | "addedfile" | "addedfiles" | "removedfile" | "processing" | "processingmultiple" | "uploadprogress" | "totaluploadprogress" | "sending" | "sendingmultiple" | "canceled" | "canceledmultiple" | "complete" | "completemultiple" | "maxfilesexceeded" | "maxfilesreached" | "queuecomplete", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<MazDropzoneOptions>;
        required: true;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    noDestroyOnUnmount: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onPaste?: ((...args: any[]) => any) | undefined;
    onDragend?: ((...args: any[]) => any) | undefined;
    onDragenter?: ((...args: any[]) => any) | undefined;
    onDragleave?: ((...args: any[]) => any) | undefined;
    onDragover?: ((...args: any[]) => any) | undefined;
    onDragstart?: ((...args: any[]) => any) | undefined;
    onDrop?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
    onComplete?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onThumbnail?: ((...args: any[]) => any) | undefined;
    onAddedfile?: ((...args: any[]) => any) | undefined;
    onAddedfiles?: ((...args: any[]) => any) | undefined;
    onRemovedfile?: ((...args: any[]) => any) | undefined;
    onProcessing?: ((...args: any[]) => any) | undefined;
    onProcessingmultiple?: ((...args: any[]) => any) | undefined;
    onUploadprogress?: ((...args: any[]) => any) | undefined;
    onTotaluploadprogress?: ((...args: any[]) => any) | undefined;
    onSending?: ((...args: any[]) => any) | undefined;
    onSendingmultiple?: ((...args: any[]) => any) | undefined;
    onCanceled?: ((...args: any[]) => any) | undefined;
    onCanceledmultiple?: ((...args: any[]) => any) | undefined;
    onCompletemultiple?: ((...args: any[]) => any) | undefined;
    onMaxfilesexceeded?: ((...args: any[]) => any) | undefined;
    onMaxfilesreached?: ((...args: any[]) => any) | undefined;
    onQueuecomplete?: ((...args: any[]) => any) | undefined;
}, {
    width: string | number;
    height: string | number;
    noDestroyOnUnmount: boolean;
}, {}>;
export default _default;
