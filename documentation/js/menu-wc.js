'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">marcel documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-c20012bdcf7e2a44c8ba131dd2cf7c876542d5d41682317df670db39702e239b41d8b427c7406fa7cd0d2694cadd7b27f802e5884d16f0984a4e8a6b1977ebd6"' : 'data-bs-target="#xs-components-links-module-AdminModule-c20012bdcf7e2a44c8ba131dd2cf7c876542d5d41682317df670db39702e239b41d8b427c7406fa7cd0d2694cadd7b27f802e5884d16f0984a4e8a6b1977ebd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-c20012bdcf7e2a44c8ba131dd2cf7c876542d5d41682317df670db39702e239b41d8b427c7406fa7cd0d2694cadd7b27f802e5884d16f0984a4e8a6b1977ebd6"' :
                                            'id="xs-components-links-module-AdminModule-c20012bdcf7e2a44c8ba131dd2cf7c876542d5d41682317df670db39702e239b41d8b427c7406fa7cd0d2694cadd7b27f802e5884d16f0984a4e8a6b1977ebd6"' }>
                                            <li class="link">
                                                <a href="components/Aheader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Aheader</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Alayout.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Alayout</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Dashboard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Dashboard</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Sidemenu.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Sidemenu</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailModule.html" data-type="entity-link" >CocktailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CocktailModule-fb015d14ef727e886e30e77eaf527c03f3a3c2db3ef01ec83205587ef3da8d33c9c5b2fe65906a3a04f2dcc348968b29bf13f56337d6ee801715b741632f07f0"' : 'data-bs-target="#xs-components-links-module-CocktailModule-fb015d14ef727e886e30e77eaf527c03f3a3c2db3ef01ec83205587ef3da8d33c9c5b2fe65906a3a04f2dcc348968b29bf13f56337d6ee801715b741632f07f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CocktailModule-fb015d14ef727e886e30e77eaf527c03f3a3c2db3ef01ec83205587ef3da8d33c9c5b2fe65906a3a04f2dcc348968b29bf13f56337d6ee801715b741632f07f0"' :
                                            'id="xs-components-links-module-CocktailModule-fb015d14ef727e886e30e77eaf527c03f3a3c2db3ef01ec83205587ef3da8d33c9c5b2fe65906a3a04f2dcc348968b29bf13f56337d6ee801715b741632f07f0"' }>
                                            <li class="link">
                                                <a href="components/Cadd.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Cadd</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Cdelete.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Cdelete</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Cedit.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Cedit</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Cindex.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Cindex</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailRoutingModule.html" data-type="entity-link" >CocktailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-b0a27249aa33e760abf86f6edde0282e89d4095e9c98316cea0995b79e1daf90d2448ce8e00a66f717351eb2471bfb285f621ae81f37fc611b9eb77077965fe6"' : 'data-bs-target="#xs-components-links-module-PublicModule-b0a27249aa33e760abf86f6edde0282e89d4095e9c98316cea0995b79e1daf90d2448ce8e00a66f717351eb2471bfb285f621ae81f37fc611b9eb77077965fe6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-b0a27249aa33e760abf86f6edde0282e89d4095e9c98316cea0995b79e1daf90d2448ce8e00a66f717351eb2471bfb285f621ae81f37fc611b9eb77077965fe6"' :
                                            'id="xs-components-links-module-PublicModule-b0a27249aa33e760abf86f6edde0282e89d4095e9c98316cea0995b79e1daf90d2448ce8e00a66f717351eb2471bfb285f621ae81f37fc611b9eb77077965fe6"' }>
                                            <li class="link">
                                                <a href="components/Cocktail.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Cocktail</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Contact.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Contact</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Home.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Home</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Pheader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pheader</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Playout.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Playout</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-52580af7f48068a84ba45985927a6aa5448a529938b8a5d71b35357e504aa10569abf592c49ff265bbacd0d8ebb0f9fe6e0c6e9dbac2b83be1aef5d5c1aee087"' : 'data-bs-target="#xs-components-links-module-UserModule-52580af7f48068a84ba45985927a6aa5448a529938b8a5d71b35357e504aa10569abf592c49ff265bbacd0d8ebb0f9fe6e0c6e9dbac2b83be1aef5d5c1aee087"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-52580af7f48068a84ba45985927a6aa5448a529938b8a5d71b35357e504aa10569abf592c49ff265bbacd0d8ebb0f9fe6e0c6e9dbac2b83be1aef5d5c1aee087"' :
                                            'id="xs-components-links-module-UserModule-52580af7f48068a84ba45985927a6aa5448a529938b8a5d71b35357e504aa10569abf592c49ff265bbacd0d8ebb0f9fe6e0c6e9dbac2b83be1aef5d5c1aee087"' }>
                                            <li class="link">
                                                <a href="components/Uadd.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Uadd</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Udelete.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Udelete</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Uedit.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Uedit</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Uindex.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Uindex</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/App.html" data-type="entity-link" >App</a>
                            </li>
                            <li class="link">
                                <a href="components/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="components/Truc.html" data-type="entity-link" >Truc</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});