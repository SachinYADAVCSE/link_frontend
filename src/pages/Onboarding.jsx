import { useState } from "react";
import Stepper from "../components/steps/Stepper";
import PhonePreview from "../components/steps/PhonePreview";
import TemplateStep from "../components/steps/TemplateStep";
import ProfileStep from "../components/steps/ProfileStep";
import UrlStep from "../components/steps/UrlStep";
import FinishStep from "../components/steps/FinishStep";

// import { BASE_BLOCK_DEFAULTS } from "../constants/baseBlockDefaults";


const steps = ["Template", "Profile", "URL", "Finish"];

export default function Onboarding() {
    const [step, setStep] = useState(0);

    const [data, setData] = useState({
        template: null,
        blocks: [], // critical (missing now)

        name: "",
        bio: "",
        avatar: "",

        theme: {},
        socials: {},
        url: "",
    });

    // const generateInitialBlocks = (templateKey) => {
    //     const template = TEMPLATES[templateKey];
      
    //     return template.initialBlocks.map((blockConfig) => {
    //       const base = BASE_BLOCK_DEFAULTS[blockConfig.type];
      
    //       return {
    //         id: crypto.randomUUID(),
    //         type: blockConfig.type,
    //         content: {
    //           ...base.content,
    //           ...blockConfig.content
    //         },
    //         styles: {
    //           ...base.styles,
    //           ...(template.blockOverrides?.[blockConfig.type]?.styles || {})
    //         },
    //         player: base.player ? { ...base.player } : undefined,
    //         children: []
    //       };
    //     });
    //   };
      

    // here we are trying to fetch the templates
    const update = (values) => setData((p) => ({ ...p, ...values }));

    const StepComponent = [
        <TemplateStep data={data} update={update} />,
        <ProfileStep data={data} update={update} />,
        // <SocialStep data={data} update={update} />,
        <UrlStep data={data} update={update} />,
        <FinishStep data={data} />
    ][step];

    return (
        <div className="min-h-screen bg-gray-50  p-8">
            <Stepper current={step} steps={steps} />

            <div className="grid grid-cols-2 gap-10 mt-10">
                {/* LEFT */}
                <div className="bg-white p-10 rounded-2xl shadow">
                    {StepComponent}
            
                        <div className="flex justify-between mt-10">
                            <button
                                disabled={step === 0}
                                onClick={() => setStep(step - 1)}
                                className="px-6 py-2 border rounded"
                            >
                                Back
                            </button>

                            { step !== steps.length - 1 && (
                            <button
                                onClick={() => setStep(step + 1)}
                                className="px-6 py-2 bg-blue-600 text-white rounded"
                            >
                                Next
                            </button> )}
                        </div>
                </div>

                {/* RIGHT PREVIEW */}
                
                <PhonePreview data={data} />
            </div>
        </div>
    );
}
