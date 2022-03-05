import React, {ChangeEvent} from 'react';
import styles from "./uploadFile.module.css";

interface IUploadFileProps {
    callback: (file: string) => void
}

const UploadFile: React.FC<IUploadFileProps> = ({callback}: IUploadFileProps) => {

    function readFile(input: FileList) {

        const file: Blob | MediaSource = input[0]

        const uploadFileURL: string = URL.createObjectURL(file)

        callback(uploadFileURL)

    }

    return (
        <div>
            <label className={`${styles.label_text} ${styles.upload_file} shadow`}>Загрузить обложку
                <input style={{display: "none"}} name="upload_file" type="file"
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           if (event.target.files) {
                               readFile(event.target.files)
                           }
                       }}/>
            </label>
        </div>
    );
};

export default UploadFile;