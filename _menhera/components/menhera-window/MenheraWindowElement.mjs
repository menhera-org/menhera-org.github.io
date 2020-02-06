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

import {ShadowObjects} from '/_menhera/modules/ShadowObjects.mjs';
import {appendNewElement} from '/_menhera/modules/DOMUtils.mjs';

const shadowObjects = new ShadowObjects;

export class MenheraWindowElement extends HTMLElement
{
	static get observedAttributes ()
	{
		return [];
	}
	
	constructor ()
	{
		super ();
		const shadow = shadowObject.get (this);
		shadow.root = this.attachShadow ({mode: 'closed'});
		
		appendNewElement (shadow.root, 'link', {
			rel: 'stylesheet',
			href: '/_menhera/common/common.css',
		});
		
		appendNewElement (shadow.root, 'link', {
			rel: 'stylesheet',
			href: '/_menhera/components/menhera-window/menhera-window.css',
		});
		
		shadow.frame = appendNewElement (shadow.root, 'div', {
			id: 'frame',
		});
		
		shadow.menubar = appendNewElement (shadow.root, 'div', {
			id: 'menubar',
		});
		
		shadow.drawer = appendNewElement (shadow.root, 'div', {
			id: 'drawer',
		});
		
		shadow.slotVisible = appendNewElement (shadow.frame, 'slot', {
			name: 'visible-activity',
		});
		
		
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

customElements.define ('menhera-window', MenheraWindowElement);

