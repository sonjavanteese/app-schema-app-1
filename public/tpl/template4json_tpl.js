// JSON2Schema
// File for ID 'template_id': jsoneditor_app/tpl/template4json_tpl.js
// created with JSON2Schema: https://niehausbert.gitlab.io/JSON2Schema

vDataJSON.tpl.template4json =  `

<UL class="itemlist">   
<LI class="item4list">  
<OL class="enumlist">   
{{#each episoden}}
<LI class="item4list"> Sub-Type of Array Element: 'object'
<UL class="itemlist">   
{{#with this}}
<LI class="item4list">  {{{id}}}
</LI>
<LI class="item4list">  {{{name}}}
</LI>
<LI class="item4list">  {{{air_date}}}
</LI>
<LI class="item4list">  {{{director}}}
</LI>
<LI class="item4list">  {{{writer}}}
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each characters}}
<LI class="item4list"> {{{this}}}
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  {{{img_url}}}
</LI>
{{/with}}
</UL> 
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each character}}
<LI class="item4list"> Sub-Type of Array Element: 'object'
<UL class="itemlist">   
{{#with this}}
<LI class="item4list">  {{{id}}}
</LI>
<LI class="item4list">  {{{name}}}
</LI>
<LI class="item4list">  {{{status}}}
</LI>
<LI class="item4list">  {{{species}}}
</LI>
<LI class="item4list">  {{{gender}}}
</LI>
<LI class="item4list">  {{{hair}}}
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each alias}}
<LI class="item4list"> {{{this}}}
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  {{{origin}}}
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each abilities}}
<LI class="item4list"> {{{this}}}
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  {{{img_url}}}
</LI>
{{/with}}
</UL> 
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each location}}
<LI class="item4list"> Sub-Type of Array Element: 'object'
<UL class="itemlist">   
{{#with this}}
<LI class="item4list">  {{{id}}}
</LI>
<LI class="item4list">  {{{name}}}
</LI>
<LI class="item4list">  {{{type}}}
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each inhabitants}}
<LI class="item4list"> {{{this}}}
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  
<OL class="enumlist">   
{{#each notable_residents}}
<LI class="item4list"> {{{this}}}
</LI>
{{/each}}
</OL> 
</LI>
<LI class="item4list">  {{{img_url}}}
</LI>
{{/with}}
</UL> 
</LI>
{{/each}}
</OL> 
</LI>
</UL> `;
