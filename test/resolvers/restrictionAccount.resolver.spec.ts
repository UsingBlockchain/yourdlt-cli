/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { expect } from 'chai';
import { AddressRestrictionFlag, MosaicRestrictionFlag, OperationRestrictionFlag } from 'symbol-sdk';

import {
    RestrictionAccountAddressFlagsResolver,
    RestrictionAccountMosaicFlagsResolver,
    RestrictionAccountOperationFlagsResolver,
} from '../../src/resolvers/restrictionAccount.resolver';

describe('Restriction account address flags resolver', () => {
    it('should return AllowOutgoingAddress', async () => {
        const flags = 'AllowOutgoingAddress';
        const options = { flags } as any;
        expect(await new RestrictionAccountAddressFlagsResolver().resolve(options)).to.be.equal(
            AddressRestrictionFlag.AllowOutgoingAddress,
        );
    });

    it('should return BlockOutgoingAddress', async () => {
        const flags = 'BlockOutgoingAddress';
        const options = { flags } as any;
        expect(await new RestrictionAccountAddressFlagsResolver().resolve(options)).to.be.equal(
            AddressRestrictionFlag.BlockOutgoingAddress,
        );
    });

    it('should return AllowIncomingAddress', async () => {
        const flags = 'AllowIncomingAddress';
        const options = { flags } as any;
        expect(await new RestrictionAccountAddressFlagsResolver().resolve(options)).to.be.equal(
            AddressRestrictionFlag.AllowIncomingAddress,
        );
    });

    it('should return BlockIncomingAddress', async () => {
        const flags = 'BlockIncomingAddress';
        const options = { flags } as any;
        expect(await new RestrictionAccountAddressFlagsResolver().resolve(options)).to.be.equal(
            AddressRestrictionFlag.BlockIncomingAddress,
        );
    });

    it('should change key', async () => {
        const key = 'BlockIncomingAddress';
        const options = { key } as any;
        expect(await new RestrictionAccountAddressFlagsResolver().resolve(options, 'altText', 'key')).to.be.equal(
            AddressRestrictionFlag.BlockIncomingAddress,
        );
    });
});

describe('Restriction account mosaic flags resolver', () => {
    it('should return AllowMosaic', async () => {
        const flags = 'AllowMosaic';
        const options = { flags } as any;
        expect(await new RestrictionAccountMosaicFlagsResolver().resolve(options)).to.be.equal(MosaicRestrictionFlag.AllowMosaic);
    });

    it('should return BlockMosaic', async () => {
        const flags = 'BlockMosaic';
        const options = { flags } as any;
        expect(await new RestrictionAccountMosaicFlagsResolver().resolve(options)).to.be.equal(MosaicRestrictionFlag.BlockMosaic);
    });

    it('should change key', async () => {
        const key = 'BlockMosaic';
        const options = { key } as any;
        expect(await new RestrictionAccountMosaicFlagsResolver().resolve(options, 'altText', 'key')).to.be.equal(
            MosaicRestrictionFlag.BlockMosaic,
        );
    });
});

describe('Restriction account operation flags resolver', () => {
    it('should return AllowOutgoingTransactionType', async () => {
        const flags = 'AllowOutgoingTransactionType';
        const options = { flags } as any;
        expect(await new RestrictionAccountOperationFlagsResolver().resolve(options)).to.be.equal(
            OperationRestrictionFlag.AllowOutgoingTransactionType,
        );
    });

    it('should return BlockOutgoingTransactionType', async () => {
        const flags = 'BlockOutgoingTransactionType';
        const options = { flags } as any;
        expect(await new RestrictionAccountOperationFlagsResolver().resolve(options)).to.be.equal(
            OperationRestrictionFlag.BlockOutgoingTransactionType,
        );
    });

    it('should change key', async () => {
        const key = 'BlockOutgoingTransactionType';
        const options = { key } as any;
        expect(await new RestrictionAccountOperationFlagsResolver().resolve(options, 'altText', 'key')).to.be.equal(
            OperationRestrictionFlag.BlockOutgoingTransactionType,
        );
    });
});
