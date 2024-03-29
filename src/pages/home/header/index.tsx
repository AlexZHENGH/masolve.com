import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";
import Translate from "@docusaurus/Translate";

import headerCss from "@site/src/pages/home/header/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

const Header: React.FC = () => {
    return (
        <header>
            <div className={headerCss.hero}>
                <div
                    className={clsx(
                        headerCss.heroContent,
                        headerCss.heroContentStack
                    )}
                >
                    <div
                        className={clsx(
                            headerCss.heroTextContainer,
                            headerCss.heroTextContainerWidth
                        )}
                    >
                        <h1 className={sharedCss.titleH1}>
                            <Translate>All-in-one solution for</Translate>
                            <br />
                            <span
                                className={clsx(
                                    sharedCss.titleH1,
                                    sharedCss.highlightText
                                )}
                            >
                                <Translate>Modeling & Simulation</Translate>
                            </span>
                        </h1>
                        <p className={sharedCss.text}>
                            <Translate>
                                Masolve™ unlocks the power to implement the
                                Model Informed Drug Development (MIDD) approach
                                in one software platform.
                            </Translate>
                        </p>
                        <div className={sharedCss.buttonsContainer}>
                            <Button
                                appearance="primary"
                                size="large"
                                as="a"
                                className={sharedCss.button}
                                href="/"
                            >
                                <Translate>Get Started</Translate>
                            </Button>
                            <Button
                                appearance="outline"
                                size="large"
                                as="a"
                                className={clsx(
                                    sharedCss.button,
                                    sharedCss.outlineButton
                                )}
                                href="/"
                                icon={<IconExternalLink />}
                                iconPosition="after"
                            >
                                <Translate>Playground</Translate>
                            </Button>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            headerCss.heroVideoContainer,
                            headerCss.heroVideoContainerWidth
                        )}
                    >
                        <iframe
                            className={headerCss.heroVideoFrame}
                            src="//player.bilibili.com/player.html?aid=439902766&bvid=BV1sL411f7j8&page=1&high_quality=1"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
