import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";

const Module = ({ children, open, title, handleOpen,className }) => {

    return (
        <>

            <Dialog className={className} open={open} handler={handleOpen}>
                <DialogHeader className="font-semibold  text-xl">{title}</DialogHeader>
                <DialogBody>
                    {children || ""}

                </DialogBody>
            </Dialog>
        </>
    )
}

export default Module