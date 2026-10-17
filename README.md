# LubDubAPP Guide

An interactive guide for cardiovascular advanced practice provider (APP) training, from introductory anatomy to in-depth hemodynamics and echocardiography: a beating 3D model of a real adult heart with the cardiac cycle, pressure tracings and heart sounds, valve disease graded from mild to severe with chamber remodeling, and simulated transthoracic (TTE) and transesophageal (TEE) echo views with colour and spectral Doppler.

**Designed and created by Ken Chan, ACNPC-AG, CCK, RCIS, AACC | Structural Heart APP | Program Director - Cardiovascular Advanced Practice Provider Fellowship at UTHealth Houston**, built with the help of AI (Claude, Anthropic).

> **For non-commercial education only.** This is a simulated teaching model. Pressures, velocities and measurements are typical adult values produced by the model, not patient data. Nothing here is medical advice or a substitute for clinical judgment, current guidelines or supervised training; do not use it for diagnosis or patient care.

**Further learning:** for ultrasound physics and in-depth echocardiography, continue with [The Heart by Ultrasound (intro2echo.com)](https://intro2echo.com/).

## Use it

- **Online:** <https://kenhkcyk.github.io/lubdubAPPguide/>
- **Offline or on a shared drive:** download [`LubDubAPP-Guide.html`](LubDubAPP-Guide.html). It is a single self-contained file (about 6 MB) that opens in any modern browser without internet.

It runs entirely in the browser: no sign-in, no analytics, nothing to install. It needs a browser with WebGL (current desktop and mobile browsers).

## What is in it

- **Anatomy:** rotate the heart, peel back the wall, and select any chamber, valve, vessel, coronary branch or conduction structure for its function and a clinical pearl. C-arm angles (LAO/RAO, CRA/CAU) update live as you rotate, with RAO, LAO, 3-cusp coplanar and surgeon's mitral views.
- **Cardiac cycle:** 70 bpm with Lead II ECG, phonocardiogram, and Ao, LV, LA, PCWP, PA, RV and RA pressures. Pause and drag the phase bar or any tracing to scrub through the beat. Filters show the left heart, the right heart, or LV and RV together (constriction versus restriction).
- **Scenarios:** MR, TR, AS and chronic AR on a mild-to-severe slider graded to ASE and ACC/AHA cut-offs; acute AR; MS in sinus rhythm and in AF; TS; obstructive HCM; restrictive cardiomyopathy; constrictive pericarditis. The chambers remodel with each disease (LVH, dilation, atrial and RV enlargement).
- **Echo:** 23 TTE and TEE views with simulated B-mode, colour Doppler (flow convergence, PISA, aliasing), PW and CW Doppler with live measurements, end-diastolic calipers, and a TEE omniplane angle indicator.
- **Sounds:** synthesized heart sounds in sync with the model, plus real patient recordings.

## Terms of use

Free for non-commercial education. Commercial use is not permitted, in part because the patient heart-sound recordings are licensed for non-commercial use only (CC BY-NC-ND 4.0). Please credit the creator when you use or share it.

The creator's affiliation is listed for identification only. This is an independent educational project, not an official UTHealth Houston publication.

## References and sources

Grading thresholds, normal values, view definitions and waveform physiology follow these documents. The simulation itself is a simplified model and has not been validated against patient data.

1. Zoghbi WA, Adams D, Bonow RO, et al. Recommendations for noninvasive evaluation of native valvular regurgitation: a report from the American Society of Echocardiography developed in collaboration with the Society for Cardiovascular Magnetic Resonance. *J Am Soc Echocardiogr*. 2017;30(4):303-371.
2. Baumgartner H, Hung J, Bermejo J, et al. Recommendations on the echocardiographic assessment of aortic valve stenosis: a focused update from the European Association of Cardiovascular Imaging and the American Society of Echocardiography. *J Am Soc Echocardiogr*. 2017;30(4):372-392.
3. Otto CM, Nishimura RA, Bonow RO, et al. 2020 ACC/AHA guideline for the management of patients with valvular heart disease. *J Am Coll Cardiol*. 2021;77(4):e25-e197.
4. Lang RM, Badano LP, Mor-Avi V, et al. Recommendations for cardiac chamber quantification by echocardiography in adults: an update from the American Society of Echocardiography and the European Association of Cardiovascular Imaging. *J Am Soc Echocardiogr*. 2015;28(1):1-39.e14.
5. Mitchell C, Rahko PS, Blauwet LA, et al. Guidelines for performing a comprehensive transthoracic echocardiographic examination in adults: recommendations from the American Society of Echocardiography. *J Am Soc Echocardiogr*. 2019;32(1):1-64.
6. Hahn RT, Abraham T, Adams MS, et al. Guidelines for performing a comprehensive transesophageal echocardiographic examination: recommendations from the American Society of Echocardiography and the Society of Cardiovascular Anesthesiologists. *J Am Soc Echocardiogr*. 2013;26(9):921-964.
7. Nagueh SF, Smiseth OA, Appleton CP, et al. Recommendations for the evaluation of left ventricular diastolic function by echocardiography: an update from the American Society of Echocardiography and the European Association of Cardiovascular Imaging. *J Am Soc Echocardiogr*. 2016;29(4):277-314.
8. Welch TD, Ling LH, Espinosa RE, et al. Echocardiographic diagnosis of constrictive pericarditis: Mayo Clinic criteria. *Circ Cardiovasc Imaging*. 2014;7(3):526-534.
9. Ommen SR, Ho CY, Asif IM, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR guideline for the management of hypertrophic cardiomyopathy. *J Am Coll Cardiol*. 2024;83(23):2324-2405.
10. Blanke P, Weir-McCall JR, Achenbach S, et al. Computed tomography imaging in the context of transcatheter aortic valve implantation (TAVI)/transcatheter aortic valve replacement (TAVR): an expert consensus document of the Society of Cardiovascular Computed Tomography. *JACC Cardiovasc Imaging*. 2019;12(1):1-24.
11. Kern MJ, Lim MJ, Goldstein JA, eds. *Hemodynamic Rounds: Interpretation of Cardiac Pathophysiology from Pressure Waveform Analysis*. 3rd ed. Wiley-Blackwell; 2009.
12. Hall JE, Hall ME. *Guyton and Hall Textbook of Medical Physiology*. 14th ed. Elsevier; 2021.

### Third-party content

- **3D heart model:** Human Reference Atlas, [CCF 3D Reference Object Library](https://github.com/hubmapconsortium/ccf-3d-reference-object-library) (HuBMAP), Visible Human Male heart and heart vasculature, v1.2. Licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); merged, simplified and recolored for teaching.
- **Heart-sound recordings:** BUET Multi-disease Heart Sound Dataset (BMD-HS), © 2024 mHealth Lab, Bangladesh University of Engineering and Technology. Licensed [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/); files used unmodified. Ali SN, Zahin A, Shuvo SB, et al. BUET multi-disease heart sound dataset: a comprehensive auscultation dataset for developing computer-aided diagnostic systems. *Comput Methods Programs Biomed Update*. 2026;9:100237.
- **three.js** r147: MIT License (see `vendor/three/LICENSE`).
- **Fonts:** IBM Plex Sans and IBM Plex Mono via Google Fonts (SIL Open Font License).
- **The Heart by Ultrasound** ([intro2echo.com](https://intro2echo.com/)): its flow-convergence colour Doppler display informed the approach used here. No code or images were used.

The conduction system, chordae, moderator band, valve leaflets, left atrial appendage lumen and fossa ovalis are drawn by the app because the source model lacks them. Echo images, Doppler and pressures are simulated from the model.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The web edition |
| `heart.json` | 3D heart model (glTF, embedded buffers) |
| `heart-sounds.json` | Patient heart-sound recordings |
| `vendor/three/` | three.js r147, served locally so the site works where CDNs are blocked |
| `LubDubAPP-Guide.html` | Offline single-file edition |
| `_headers` | Caching rules for Cloudflare Pages |

To run it locally, serve the folder with any static web server (for example `python3 -m http.server`) and open `http://localhost:8000`. Opening `index.html` directly from disk will not load the model; use the offline file for that.
