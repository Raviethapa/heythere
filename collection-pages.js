
(() => {
 const $=(id)=>document.getElementById(id);
 const search=$("docSearch"), filter=$("docFilter"), grid=$("docGrid");
 function applyDocs(){
   if(!grid)return;
   const q=(search?.value||"").toLowerCase();
   const f=filter?.value||"all";
   grid.querySelectorAll(".media-card").forEach(card=>{
     const title=(card.dataset.title||"").toLowerCase();
     const status=card.dataset.status||"Want to watch";
     card.hidden=!(title.includes(q)&&(f==="all"||status===f));
   });
 }
 if(search) search.addEventListener("input",applyDocs);
 if(filter) filter.addEventListener("change",applyDocs);
 document.querySelectorAll(".media-status").forEach(sel=>{
   sel.addEventListener("change",()=>{
     const card=sel.closest(".media-card");
     if(card) card.dataset.status=sel.value;
     applyDocs();
   });
 });
 const list=$("choiceList"), summary=$("choiceSummary");
 function updateChoices(){
   if(!list||!summary)return;
   const rows=[...list.querySelectorAll(".choice-row")];
   const chosen=rows.filter(r=>r.querySelector("button.selected")).length;
   const a=rows.filter(r=>r.querySelector("button.selected")?.dataset.choice==="A").length;
   const b=rows.filter(r=>r.querySelector("button.selected")?.dataset.choice==="B").length;
   summary.textContent=chosen===0?"Choose a few answers and see your very unofficial pattern.":chosen<rows.length?`${chosen} of ${rows.length} answered. You lean ${a>b?"toward the reflective, plan-first side":b>a?"toward the exploratory, go-and-learn side":"somewhere in the middle"} so far.`:`Your answers lean ${a>b?"toward the reflective, plan-first side":b>a?"toward the exploratory, go-and-learn side":"beautifully down the middle"}. This is a playful snapshot, not a personality test.`;
 }
 if(list){
   list.addEventListener("click",e=>{
     const btn=e.target.closest("button[data-choice]");
     if(!btn)return;
     const row=btn.closest(".choice-row");
     row.querySelectorAll("button").forEach(b=>{b.classList.remove("selected");b.setAttribute("aria-pressed","false")});
     btn.classList.add("selected");btn.setAttribute("aria-pressed","true");
     updateChoices();
   });
 }
 $("resetChoices")?.addEventListener("click",()=>{
   list?.querySelectorAll("button").forEach(b=>{b.classList.remove("selected");b.setAttribute("aria-pressed","false")});
   updateChoices();
 });
})();
