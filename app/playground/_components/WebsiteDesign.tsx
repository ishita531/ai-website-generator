// import React, { useEffect, useRef, useState } from 'react'
// import WebPageTools from './WebPageTools';


// type Props = {
//   generatedCode: string
// }
// export const HTML_CODE = `<!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <meta name="description" content="AI Website Builder - Modern TailwindCSS + Flowbite Template">
//           <title>AI Website Builder</title>

//           <!-- Tailwind CSS -->
//           <script src="https://cdn.tailwindcss.com"></script>

//           <!-- Flowbite CSS & JS -->
//           <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet">
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

//           <!-- Font Awesome / Lucide -->
//           <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
//           <script src="https://unpkg.com/lucide@latest"></script>


//           <!-- Chart.js -->
//           <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

          
//       </head>
//       <body id="root">
      
//       </body>
//       </html>`

// function WebsiteDesign({ generatedCode }: Props) {
//   const iframeRef = useRef<HTMLIFrameElement>(null);
//   const [selectedScreenSize,setSelectedScreeenSize]=useState('web')
//   // Initialize iframe shell once
  
// useEffect(() => {
//     if (!iframeRef.current) return;
//     const doc = iframeRef.current.contentDocument;
//     if (!doc) return;

//     doc.open();
//     doc.write(HTML_CODE);
//     doc.close();

//     let hoverEl: HTMLElement | null = null;
//     let selectedEl: HTMLElement | null = null;



//     const handleMouseOver = (e: MouseEvent) => {
//         if (selectedEl) return;
//         const target = e.target as HTMLElement;
//         if (hoverEl && hoverEl !== target) {
//             hoverEl.style.outline = "";
//         }
//         hoverEl = target;
//         hoverEl.style.outline = "2px dotted blue";
//     };

//     const handleMouseOut = (e: MouseEvent) => {
//         if (selectedEl) return;
//         if (hoverEl) {
//             hoverEl.style.outline = "";
//             hoverEl = null;
//         }
//     };

//     const handleClick = (e: MouseEvent) => {
//         console.log('click fired',e.target)
//         e.preventDefault();
//         e.stopPropagation();
//         const target = e.target as HTMLElement;

//         if (selectedEl && selectedEl !== target) {
//             selectedEl.style.outline = "";
//             selectedEl.removeAttribute("contenteditable");
//         }

//         selectedEl = target;
//         selectedEl.style.outline = "2px solid red";
//         selectedEl.setAttribute("contenteditable", "true");
//         selectedEl.focus();
//         console.log("Selected element:", selectedEl);

//     };

//     const handleBlur = () => {
//         if (selectedEl) {
//             console.log("Final edited element:", selectedEl.outerHTML);
//         }
//     };


//     const handleKeyDown = (e: KeyboardEvent) => {
//         if (e.key === "Escape" && selectedEl) {
//             selectedEl.style.outline = "";
//             selectedEl.removeAttribute("contenteditable");
//             selectedEl.removeEventListener("blur", handleBlur);
//             selectedEl = null;
//         }
//     };

//     doc.body?.addEventListener("mouseover", handleMouseOver);
//     doc.body?.addEventListener("mouseout", handleMouseOut);
//     doc.body?.addEventListener("click", handleClick);
//     doc?.addEventListener("keydown", handleKeyDown);

//     // Cleanup on unmount
//     return () => {
//         doc.body?.removeEventListener("mouseover", handleMouseOver);
//         doc.body?.removeEventListener("mouseout", handleMouseOut);
//         doc.body?.removeEventListener("click", handleClick);
//         doc?.removeEventListener("keydown", handleKeyDown);
//     };
// }, []);


//   // Update body only when code changes
//   useEffect(() => {
//     if (!iframeRef.current) return;
//     const doc = iframeRef.current.contentDocument;
//     if (!doc) return;

//     const root = doc.getElementById("root");
//     if (root) {
//       root.innerHTML =
//         generatedCode
//           ?.replaceAll("```html", "")
//           .replaceAll("```", "")
//           .replace("html", "") ?? "";
//     }
//   }, [generatedCode]);

//   return (
//     <div className='p-5 w-full h-full flex items-center flex-col'>
//       <iframe
//         ref={iframeRef}
//         className={`${selectedScreenSize=='web' ? 'w-full' : 'w-130' } flex-1 border rounded`} 
//         sandbox="allow-scripts allow-same-origin"
//       />
//       <WebPageTools selectedScreenSize={selectedScreenSize} 
//       setSelectedScreeenSize={(v:string)=>setSelectedScreeenSize(v)}
//       generatedCode={generatedCode}/>
//       </div>
//       );
    
    
// }



// export default WebsiteDesign
import React, { useEffect, useRef, useState } from 'react'
import WebPageTools from './WebPageTools';
import ElementSettingsSection from './ElementSettingsSection';


type Props = {
  generatedCode: string
}
export const HTML_CODE = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="AI Website Builder - Modern TailwindCSS + Flowbite Template">
          <title>AI Website Builder</title>

          <!-- Tailwind CSS -->
          <script src="https://cdn.tailwindcss.com"></script>

          <!-- Flowbite CSS & JS -->
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

          <!-- Font Awesome / Lucide -->
          <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
          <script src="https://unpkg.com/lucide@latest"></script>


          <!-- Chart.js -->
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

          
      </head>
      <body id="root">
      
      </body>
      </html>`

function WebsiteDesign({ generatedCode }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [selectedScreenSize, setSelectedScreeenSize] = useState('web')
  const[selectedEl,setselectedElement]=useState<HTMLElement|null>()

  // Initialize iframe shell once + attach listeners after load
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let hoverEl: HTMLElement | null = null;
    let selectedEl: HTMLElement | null = null;

    const handleMouseOver = (e: MouseEvent) => {
        if (selectedEl) return;
        const target = e.target as HTMLElement;
        if (hoverEl && hoverEl !== target) {
            hoverEl.style.outline = "";
        }
        hoverEl = target;
        hoverEl.style.outline = "2px dotted blue";
    };

    const handleMouseOut = () => {
        if (selectedEl) return;
        if (hoverEl) {
            hoverEl.style.outline = "";
            hoverEl = null;
        }
    };

    const handleBlur = () => {
        if (selectedEl) {
            console.log("Final edited element:", selectedEl.outerHTML);
        }
    };

    const handleClick = (e: MouseEvent) => {
        console.log('click fired', e.target)
        e.preventDefault();
        e.stopPropagation();
        const target = e.target as HTMLElement;

        if (selectedEl && selectedEl !== target) {
            selectedEl.style.outline = "";
            selectedEl.removeAttribute("contenteditable");
            selectedEl.removeEventListener("blur", handleBlur);
        }

        selectedEl = target;
        selectedEl.style.outline = "2px solid red";
        selectedEl.setAttribute("contenteditable", "true");
        selectedEl.addEventListener("blur", handleBlur);
        selectedEl.focus();
        console.log("Selected element:", selectedEl);
        setselectedElement(selectedEl)
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && selectedEl) {
            selectedEl.style.outline = "";
            selectedEl.removeAttribute("contenteditable");
            selectedEl.removeEventListener("blur", handleBlur);
            selectedEl = null;
        }
    };

    const setupListeners = () => {
        const doc = iframe.contentDocument;
        if (!doc || !doc.body) {
            console.log("doc/body not ready");
            return;
        }
        console.log("attaching listeners", doc.body);
        doc.body.addEventListener("mouseover", handleMouseOver);
        doc.body.addEventListener("mouseout", handleMouseOut);
        doc.body.addEventListener("click", handleClick);
        doc.addEventListener("keydown", handleKeyDown);
    };

    const doc = iframe.contentDocument;
    if (doc) {
        doc.open();
        doc.write(HTML_CODE);
        doc.close();
    }

    // ✅ wait for the iframe to finish loading before attaching listeners
    iframe.addEventListener("load", setupListeners);

    return () => {
        iframe.removeEventListener("load", setupListeners);
        const doc = iframe.contentDocument;
        doc?.body?.removeEventListener("mouseover", handleMouseOver);
        doc?.body?.removeEventListener("mouseout", handleMouseOut);
        doc?.body?.removeEventListener("click", handleClick);
        doc?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  // Update body only when code changes
  useEffect(() => {
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentDocument;
    if (!doc) return;

    const root = doc.getElementById("root");
    if (root) {
      root.innerHTML =
        generatedCode
          ?.replaceAll("```html", "")
          .replaceAll("```", "") ?? "";
      // ⚠️ removed .replace("html", "") — was corrupting your markup, see earlier note
    }
  }, [generatedCode]);

  return (
    <div className='flex gap-2 w-full'>
        <div className='p-5 w-full h-full flex items-center flex-col'>
      <iframe
        ref={iframeRef}
        className={`${selectedScreenSize == 'web' ? 'w-full' : 'w-[390px] mx-auto'} flex-1 border rounded`}
        sandbox="allow-scripts allow-same-origin"
      />
      <WebPageTools selectedScreenSize={selectedScreenSize}
        setSelectedScreeenSize={(v: string) => setSelectedScreeenSize(v)}
        generatedCode={generatedCode} />
    </div>
    
    <ElementSettingsSection 
    //@ts-ignore
    selectedEl={selectedEl} clearSelection={()=>setselectedElement(null)}/>
    </div>
    
  );
}

export default WebsiteDesign