/* -*- tab-width: 4; indent-tabs-mode: t -*- */
/**
	MenheraComponents

	Copyright (C) 2020  Menhera.org

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export class MenheraMenubarElement extends HTMLElement
{
	static get observedAttributes ()
	{
		return [];
	}
	
	constructor ()
	{
		super ();
		const shadowRoot = this.attachShadow ({mode: 'open'});
		
		const cssCommon = document.createElement ('link');
		cssCommon.rel = 'stylesheet';
		cssCommon.href = '/_components/common.css';
		shadowRoot.appendChild (cssCommon);
		
		const css = document.createElement ('link');
		css.rel = 'stylesheet';
		css.href = '/_components/menhera-menubar/menhera-menubar.css';
		shadowRoot.appendChild (css);
		
		const toggleDrawer = document.createElement ('button');
		toggleDrawer.id = 'toggle-drawer';
		toggleDrawer.append ('Toggle drawer');
		shadowRoot.appendChild (toggleDrawer);
		
		const heading = document.createElement ('h1');
		heading.id = 'heading';
		heading.
		heading.textContent = 'Toggle drawer';
		shadowRoot.appendChild (heading);
		
		
	}
	
	connectedCallback ()
	{
		
	}
	
	disconnectedCallback ()
	{
		
	}
	
	adoptedCallback ()
	{
		
	}
	
	attributeChangedCallback ()
	{
		
	}
}

customElements.define ('menhera-menubar', MenheraMenubarElement);

