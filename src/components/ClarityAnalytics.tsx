"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
    useEffect(() => {
        Clarity.init("vg8m2aowfi");
    }, []);

    return null;
}
