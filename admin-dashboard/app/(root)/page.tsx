"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs/app-beta/client"; // double-check import path

const SetupPage = () => {
    return (
        <div className="p-4">
            <Modal title="Test" description="Test Desc" isOpen={true} onClose={() => {}}>
                Children
            </Modal>
        </div>
    )
};

export default SetupPage;
