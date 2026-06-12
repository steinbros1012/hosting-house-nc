export default function OrnateFrame() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a3208" />
          <stop offset="20%" stopColor="#c9960c" />
          <stop offset="40%" stopColor="#f5d060" />
          <stop offset="60%" stopColor="#e8b923" />
          <stop offset="80%" stopColor="#c9960c" />
          <stop offset="100%" stopColor="#4a3208" />
        </linearGradient>
      </defs>

      {/* ── Outer rectangle ── */}
      <rect x="6" y="6" width="388" height="388" fill="none" stroke="url(#gold)" strokeWidth="2" />
      <rect x="10" y="10" width="380" height="380" fill="none" stroke="url(#gold)" strokeWidth="1" opacity="0.5" />

      {/* ══ CORNER SCROLLWORK — top-left ══ */}
      {/* Large outer curl */}
      <path d="M6,50 C6,30 14,18 28,14 C38,11 48,16 52,26 C56,38 48,52 36,52 C26,52 20,44 24,36 C27,29 36,28 40,34" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      {/* Inner curl */}
      <path d="M6,80 C8,65 18,55 32,54 C44,53 52,62 50,72 C48,82 38,86 30,80" fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Leaf sprigs */}
      <path d="M28,14 C22,8 16,6 10,8" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36,52 C30,58 28,66 32,72" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="24" cy="11" rx="4" ry="6" fill="url(#gold)" opacity="0.9" transform="rotate(-30,24,11)"/>
      <ellipse cx="50" cy="72" rx="3" ry="5" fill="url(#gold)" opacity="0.9" transform="rotate(20,50,72)"/>
      {/* Horizontal scroll from corner */}
      <path d="M50,6 C70,6 85,10 95,18 C108,28 106,42 94,46 C84,50 74,44 76,34 C78,26 88,24 94,30" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      {/* Vertical scroll from corner */}
      <path d="M6,50 C6,70 10,85 18,95 C28,108 42,106 46,94 C50,84 44,74 34,76 C26,78 24,88 30,94" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      {/* Corner fleur */}

      {/* ══ CORNER SCROLLWORK — top-right (mirror) ══ */}
      <path d="M394,50 C394,30 386,18 372,14 C362,11 352,16 348,26 C344,38 352,52 364,52 C374,52 380,44 376,36 C373,29 364,28 360,34" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M394,80 C392,65 382,55 368,54 C356,53 348,62 350,72 C352,82 362,86 370,80" fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M372,14 C378,8 384,6 390,8" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M364,52 C370,58 372,66 368,72" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="376" cy="11" rx="4" ry="6" fill="url(#gold)" opacity="0.9" transform="rotate(30,376,11)"/>
      <ellipse cx="350" cy="72" rx="3" ry="5" fill="url(#gold)" opacity="0.9" transform="rotate(-20,350,72)"/>
      <path d="M350,6 C330,6 315,10 305,18 C292,28 294,42 306,46 C316,50 326,44 324,34 C322,26 312,24 306,30" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M394,50 C394,70 390,85 382,95 C372,108 358,106 354,94 C350,84 356,74 366,76 C374,78 376,88 370,94" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>

      {/* ══ CORNER SCROLLWORK — bottom-left (mirror) ══ */}
      <path d="M6,350 C6,370 14,382 28,386 C38,389 48,384 52,374 C56,362 48,348 36,348 C26,348 20,356 24,364 C27,371 36,372 40,366" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M6,320 C8,335 18,345 32,346 C44,347 52,338 50,328 C48,318 38,314 30,320" fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M28,386 C22,392 16,394 10,392" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36,348 C30,342 28,334 32,328" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="24" cy="389" rx="4" ry="6" fill="url(#gold)" opacity="0.9" transform="rotate(30,24,389)"/>
      <ellipse cx="50" cy="328" rx="3" ry="5" fill="url(#gold)" opacity="0.9" transform="rotate(-20,50,328)"/>
      <path d="M50,394 C70,394 85,390 95,382 C108,372 106,358 94,354 C84,350 74,356 76,366 C78,374 88,376 94,370" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M6,350 C6,330 10,315 18,305 C28,292 42,294 46,306 C50,316 44,326 34,324 C26,322 24,312 30,306" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>

      {/* ══ CORNER SCROLLWORK — bottom-right ══ */}
      <path d="M394,350 C394,370 386,382 372,386 C362,389 352,384 348,374 C344,362 352,348 364,348 C374,348 380,356 376,364 C373,371 364,372 360,366" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M394,320 C392,335 382,345 368,346 C356,347 348,338 350,328 C352,318 362,314 370,320" fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M372,386 C378,392 384,394 390,392" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M364,348 C370,342 372,334 368,328" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="376" cy="389" rx="4" ry="6" fill="url(#gold)" opacity="0.9" transform="rotate(-30,376,389)"/>
      <ellipse cx="350" cy="328" rx="3" ry="5" fill="url(#gold)" opacity="0.9" transform="rotate(20,350,328)"/>
      <path d="M350,394 C330,394 315,390 305,382 C292,372 294,358 306,354 C316,350 326,356 324,366 C322,374 312,376 306,370" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M394,350 C394,330 390,315 382,305 C372,292 358,294 354,306 C350,316 356,326 366,324 C374,322 376,312 370,306" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>

      {/* ══ TOP CENTER ornament ══ */}
      <path d="M160,6 C180,4 190,10 200,6 C210,10 220,4 240,6" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M185,6 C188,2 194,0 200,2 C206,0 212,2 215,6" fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="188" cy="5" rx="3" ry="4" fill="url(#gold)" opacity="0.8" transform="rotate(-15,188,5)"/>
      <ellipse cx="212" cy="5" rx="3" ry="4" fill="url(#gold)" opacity="0.8" transform="rotate(15,212,5)"/>

      {/* ══ BOTTOM CENTER ornament ══ */}
      <path d="M160,394 C180,396 190,390 200,394 C210,390 220,396 240,394" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M185,394 C188,398 194,400 200,398 C206,400 212,398 215,394" fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="188" cy="395" rx="3" ry="4" fill="url(#gold)" opacity="0.8" transform="rotate(15,188,395)"/>
      <ellipse cx="212" cy="395" rx="3" ry="4" fill="url(#gold)" opacity="0.8" transform="rotate(-15,212,395)"/>

      {/* ══ LEFT CENTER ornament ══ */}
      <path d="M6,160 C4,180 10,190 6,200 C10,210 4,220 6,240" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>

      {/* ══ RIGHT CENTER ornament ══ */}
      <path d="M394,160 C396,180 390,190 394,200 C390,210 396,220 394,240" fill="none" stroke="url(#gold)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
