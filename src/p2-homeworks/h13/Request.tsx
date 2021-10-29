import React, {useState} from "react";
import {ChangeEvent} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requstsApi} from "./api/RequestsApi"
import s from "./response.module.css"


export function Request() {

    const [check, setCheck] = useState<boolean>(false)
    const [result, setResult] = useState("")
    const [error, setError] = useState("")


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }


    const sendRequest = () => {
        requstsApi.postRequests(check)
            .then(async res => {
                await setResult(JSON.stringify(
                    res.data.errorText
                ))
                setError("")
            })
            .catch(async rej => {
                    await setError(JSON.stringify(rej.response.data.errorText))
                    setResult("")
                }
            )

    }

    return (
        <div>
            <div>
                <input
                    type={'checkbox'}
                    onChange={onChangeValue}
                />
            </div>
            <SuperButton onClick={sendRequest}>Send</SuperButton>
            {result && <div className={s.green}>{result}</div>}
            {error && <div className={s.red}>{error}</div>}
        </div>
    )

}

export default Request