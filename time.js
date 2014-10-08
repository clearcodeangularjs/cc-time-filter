/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-time-filter.

    cc-time-filter is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-time-filter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-time-filter.  If not, see <http://www.gnu.org/licenses/>.

*/
"use strict";

angular.module('cc.time.filter', [])
    /*
     * Calculate difference between chosen one and current date
     */
    .filter('untilNow', function($filter) {

        return function(date, format) {

            var date = new Date(date);
            var currentDate = new Date();

            if (date.toDateString() == currentDate.toDateString) {

                var minutes = currentDate.getMinutes() - date.getMinutes();
                var hours = currentDate.getHours() - date.getHours();

                if (hours >= 12) {

                    if (minutes < 60) {

                        if (minutes < 3) {
                            return 'few minutes ago';
                        }

                        return minutes + ' minutes ago';
                    }

                    return hours + ' ' + hours == 1 ? 'hour' : 'hours' + ' ago';
                }

                return $filter('date')(date, 'h:mm a');
            }

            return $filter('date')(date, format);
        }
    });