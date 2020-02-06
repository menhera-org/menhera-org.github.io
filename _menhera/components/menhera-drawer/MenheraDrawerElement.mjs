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


const shadowRoots = new WeakMap;

export class MenheraDrawerElement extends HTMLElement
{
	static get observedAttributes ()
	{
		return [];
	}
	
	constructor (site_name, site_subtitle)
	{
		super ();
		const shadowRoot = this.attachShadow ({mode: 'closed'});
		shadowRoots.set (this, shadowRoot);
		
		const cssCommon = document.createElement ('link');
		cssCommon.rel = 'stylesheet';
		cssCommon.href = '/_components/common.css';
		shadowRoot.appendChild (cssCommon);
		
		const css = document.createElement ('link');
		css.rel = 'stylesheet';
		css.href = '/_components/menhera-drawer/menhera-drawer.css';
		shadowRoot.appendChild (css);
		
		const h2 = document.createElement ('h2');
		h2.id = 'site-name';
		h2.append (site_name || 'Menhera.org');
		shadowRoot.appendChild (h2);
		shadowRoot.appendChild (css);
		
		const h3 = document.createElement ('h3');
		h3.id = 'site-subtitle';
		h3.append (site_subtitle || 'MenheraComponents Page');
		shadowRoot.appendChild (h3);
		
		const content = document.querySelector ('#menhera-drawer').content;
		shadowRoot.appendChild (content.cloneNode (true));
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
	
	get siteName ()
	{
		return shadowRoots.get (this).querySelector ('#site-name').textContent;
	}
	
	set siteName (name)
	{
		const h2 = shadowRoots.get (this).querySelector ('#site-name');
		h2.textContent = name;
		return true;
	}
	
	get siteSubtitle ()
	{
		return shadowRoots.get (this).querySelector ('#site-subtitle').textContent;
	}
	
	set siteSubtitle (subtitle)
	{
		const h3 = shadowRoots.get (this).querySelector ('#site-subtitle');
		h3.textContent = subtitle;
		return true;
	}
}

customElements.define ('menhera-drawer', MenheraDrawerElement);

