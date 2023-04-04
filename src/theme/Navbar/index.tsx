/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";

const Navbar: React.FC = (): JSX.Element => {
    return (
        <NavbarLayout>
            <NavbarContent />
        </NavbarLayout>
    );
};

export default Navbar;
