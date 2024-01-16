import {useTranslation} from "react-i18next";
import Markdown from "react-markdown";

import file from "@/data/audit-report.md"
import {useEffect, useState} from "react";

export default function ViewAuditReport() {

    const { t } = useTranslation();

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <>

            <Markdown >{markdown}</Markdown>
        </>
    )
}
