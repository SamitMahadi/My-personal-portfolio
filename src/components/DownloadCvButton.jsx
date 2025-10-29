
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const DownloadCvButton = () => {
    const [Download, setDownload] = useState(false);
    const CV = '/assets/SamithossainmahadiCV.pdf';

    const DownloadToClipboard = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "assets/SamithossainmahadiCV.pdf";
        link.click();

        setDownload(true);
        setTimeout(() => setDownload(false), 2000);
    };
    return (
        <motion.button
            onClick={DownloadToClipboard}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {Download ? (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="Download"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >

                        CV has Downloaded
                    </motion.p>
                ) : (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="Download"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >

                        Download CV
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default DownloadCvButton;
