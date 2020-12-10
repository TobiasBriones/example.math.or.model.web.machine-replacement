/*
 * Copyright (C) 2019 Tobias Briones. All rights reserved.
 *
 * This file is part of Example Project: Machine Replacement Model.
 *
 * Machine Replacement Model is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Machine Replacement Model is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Machine Replacement Model.  If not, see <https://www.gnu.org/licenses/>.
 */

class MachineReplacementModel {
  constructor(
    years = 0,
    initialAge = 0,
    maxAge = 0,
    price = 0
  ) {
    this.years = years;
    this.initialAge = initialAge;
    this.maxAge = maxAge;
    this.price = price;
  }
}