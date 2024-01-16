import {useTranslation} from "react-i18next";

import CertificateASIC from "@/assets/images/asic-certificate.jpg"
import CertificateUSSMB from '@/assets/images/ussmb-certificate.jpg'
import {Image} from "@chakra-ui/react";
import Markdown from "react-markdown";

import file from "@/data/about-us.md"
import {useEffect, useState} from "react";

export default function ViewAbout() {

    const { t } = useTranslation();

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <>
            <Image
                src={CertificateASIC}
                alt="certificate"
                width="full"
                position="relative"
                mt="4"
            />
            <Image
                src={CertificateUSSMB}
                alt="certificate"
                width="full"
                position="relative"
                my="4"
            />

            <Markdown >{markdown}</Markdown>
        </>
    )
}
